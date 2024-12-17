import db from "../db.js";

class UserService {
  async getById(id) {
    const query = "SELECT * FROM users WHERE userId = ?";
    const [results] = await db.execute(query, [id]);
    return results;
  }

  async getAll({
    role,
    registrated,
    search,
    sortby = "userId",
    order = "asc",
    page = 1,
    limit = 100,
  }) {
    const params = [];
    let query = "SELECT * FROM users WHERE 1 = 1";
    //? FILTER
    if (role) {
      query += " AND role = ?";
      params.push(role);
    }
    if (registrated) {
      query += " AND registrated = ?";
      params.push(registrated);
    }
    //? SEARCH
    if (search) {
      query += " AND (email LIKE ?)";
      params.push(`%${search}%`);
    }
    //? SORT
    query += ` ORDER BY ${sortby} ${order === "asc" ? "ASC" : "DESC"}`;

    //? PAGINATION
    query += ` LIMIT ${limit} OFFSET ${(page - 1) * limit}`;

    const [results] = await db.execute(query, params);
    return results;
  }

  async create({ id, email, role }) {
    const query =
      "INSERT INTO Users (userId, email, registrated, role) VALUES (?, ?, current_timestamp(), ?)";
    await db.execute(query, [id, email, role]);
    return true;
  }

  async update({ id, email }) {
    const query = "UPDATE Users SET email = ? WHERE userId = ?";
    await db.execute(query, [email, id]);
    return true;
  }

  async delete(id) {
    const query = "DELETE FROM Users WHERE userId = ?";
    await db.execute(query, [id]);
    return true;
  }
}

export default new UserService();
