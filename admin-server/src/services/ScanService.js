import db from "../db.js";

class ScanService {
  async getById(id) {
    const query = "SELECT * FROM Scans WHERE scanId = ?";
    const [results] = await db.execute(query, [id]);
    return results;
  }

  async getAll({
    id,
    userId,
    started,
    ended,
    type,
    status,
    sortby = "scanId",
    order = "asc",
    page = 1,
    limit = 100,
  }) {
    const params = [];
    let query = "SELECT * FROM scans WHERE 1 = 1";
    //? FILTER
    if (userId) {
      query += " AND userId = ?";
      params.push(userId);
    }
    if (started) {
      query += " AND started = ?";
      params.push(started);
    }
    if (ended) {
      query += " AND ended = ?";
      params.push(ended);
    }
    if (type) {
      query += " AND type = ?";
      params.push(type);
    }
    if (status) {
      query += " AND status = ?";
      params.push(status);
    }
    //? SORT
    query += ` ORDER BY ${sortby} ${order === "asc" ? "ASC" : "DESC"}`;

    //? PAGINATION
    query += ` LIMIT ${limit} OFFSET ${(page - 1) * limit}`;

    const [results] = await db.execute(query, params);
    return results;
  }

  async create({ id, userId, started, ended, type, status }) {
    const query =
      "INSERT INTO Scans (scanId, userId, started, ended, type, status) VALUES (?, ?, ?, ?, ?, ?)";
    await db.execute(query, [id, userId, started, ended, type, status]);
    return true;
  }

  async delete(id) {
    const query = "DELETE FROM Scans WHERE scanId = ?";
    await db.execute(query, [id]);
    return true;
  }
}

export default new ScanService();
