import db from "../db.js";

class ReportService {
  async getById(id) {
    const query = "SELECT * FROM reports WHERE reportId = ?";
    const [results] = await db.execute(query, [id]);
    return results;
  }

  async getAll({
    id,
    scanId,
    created,
    source,
    format,
    search,
    sortby = "reportId",
    order = "asc",
    page = 1,
    limit = 100,
  }) {
    const params = [];
    let query = "SELECT * FROM reports WHERE 1 = 1";
    //? FILTER
    if (scanId) {
      query += " AND scanId = ?";
      params.push(scanId);
    }
    if (created) {
      query += " AND created = ?";
      params.push(created);
    }
    if (source) {
      query += " AND source = ?";
      params.push(source);
    }
    if (format) {
      query += " AND format = ?";
      params.push(format);
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

  async create({ id, scanId, created, source, format }) {
    const query =
      "INSERT INTO reports (reportId, scanId, created, source, format) VALUES (?, ?, current_timestamp(), ?, ?)";
    await db.execute(query, [id, scanId, source, format]);
    return true;
  }

  // async update({ id, title, description, modified }) {
  //   const query =
  //     "UPDATE Vulnerabilities SET title = ?, description = ?, modified = ? WHERE vulnerabilityId = ?";
  //   await db.execute(query, [title, description, modified, id]);
  //   return true;
  // }

  async delete(id) {
    const query = "DELETE FROM reports WHERE reportId = ?";
    await db.execute(query, [id]);
    return true;
  }
}

export default new ReportService();
