import db from "../db.js";

class LogService {
  async getById(id) {
    const query = "SELECT * FROM auditLogs WHERE logId = ?";
    const [results] = await db.execute(query, [id]);
    return results;
  }

  async getAll({
    id,
    time,
    action,
    search,
    sortby = "logId",
    order = "asc",
    page = 1,
    limit = 100,
  }) {
    const params = [];
    let query = "SELECT * FROM auditLogs WHERE 1 = 1";
    //? FILTER
    if (time) {
      query += " AND time = ?";
      params.push(time);
    }
    if (action) {
      query += " AND action = ?";
      params.push(action);
    }
    //? SEARCH
    // if (search) {
    //   query += " AND (description LIKE ?)";
    //   params.push(`%${search}%`);
    // }
    //? SORT
    query += ` ORDER BY ${sortby} ${order === "asc" ? "ASC" : "DESC"}`;

    //? PAGINATION
    query += ` LIMIT ${limit} OFFSET ${(page - 1) * limit}`;

    const [results] = await db.execute(query, params);
    return results;
  }

  async create({ action }) {
    const query =
      "INSERT INTO auditLogs (logId, time, action) VALUES (?, current_timestamp(), ?)";
    await db.execute(query, ["log" + Date.now(), action]);
    return true;
  }

  // async update({ id, title, description, modified }) {
  //   const query =
  //     "UPDATE auditLogs SET title = ?, description = ?, modified = ? WHERE vulnerabilityId = ?";
  //   await db.execute(query, [title, description, modified, id]);
  //   return true;
  // }

  async delete(id) {
    const query = "DELETE FROM auditLogs WHERE logId = ?";
    await db.execute(query, [id]);
    return true;
  }
}

export default new LogService();
