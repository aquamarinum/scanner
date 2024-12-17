import db from "../db.js";

class VulnerabilityService {
  async getById(id) {
    const query = "SELECT * FROM targets WHERE targetId = ?";
    const [results] = await db.execute(query, [id]);
    return results;
  }

  async getAll({
    id,
    scanId,
    name,
    hostname,
    operationSystem,
    created,
    search,
    sortby = "targetId",
    order = "asc",
    page = 1,
    limit = 100,
  }) {
    const params = [];
    let query = "SELECT * FROM targets WHERE 1 = 1";
    //? FILTER
    if (scanId) {
      query += " AND scanId = ?";
      params.push(scanId);
    }
    if (name) {
      query += " AND name = ?";
      params.push(name);
    }
    if (hostname) {
      query += " AND hostname = ?";
      params.push(hostname);
    }
    if (operationSystem) {
      query += " AND operationSystem = ?";
      params.push(operationSystem);
    }
    if (created) {
      query += " AND created = ?";
      params.push(created);
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

  async create({ id, scanId, name, hostname, operationSystem, created }) {
    const query =
      "INSERT INTO targets (targetId, scanId, name, hostname, operationSystem, created) VALUES (?, ?, ?, ?, ?, ?)";
    await db.execute(query, [
      id,
      scanId,
      name,
      hostname,
      operationSystem,
      created,
    ]);
    return true;
  }

  // async update({ id, title, description, modified }) {
  //   const query =
  //     "UPDATE Vulnerabilities SET title = ?, description = ?, modified = ? WHERE vulnerabilityId = ?";
  //   await db.execute(query, [title, description, modified, id]);
  //   return true;
  // }

  async delete(id) {
    const query = "DELETE FROM targets WHERE targetId = ?";
    await db.execute(query, [id]);
    return true;
  }
}

export default new VulnerabilityService();
