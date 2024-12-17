import db from "../db.js";

class StatService {
  async countUsers() {
    const query = "SELECT count(*) as count FROM Users";
    const [results] = await db.execute(query);
    return results;
  }

  async countScans() {
    const query = "SELECT count(*) as count FROM Scans";
    const [results] = await db.execute(query);
    return results;
  }

  async countReports() {
    const query = "SELECT count(*) as count FROM Reports";
    const [results] = await db.execute(query);
    return results;
  }

  async countVulnerabilities() {
    const query = "SELECT count(*) as count FROM Vulnerabilities";
    const [results] = await db.execute(query);
    return results;
  }
}

export default new StatService();
