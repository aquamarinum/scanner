import StatService from "../services/StatService.js";

class StatController {
  async get(req, res) {
    try {
      const uc = await StatService.countUsers();
      const sc = await StatService.countScans();
      const rc = await StatService.countReports();
      const vc = await StatService.countVulnerabilities();

      if (
        uc.length === 0 ||
        sc.length === 0 ||
        rc.length === 0 ||
        vc.length === 0
      ) {
        return res.status(404).json({ message: "not found" });
      }
      res.status(200).json({
        users: uc[0],
        scans: sc[0],
        reports: rc[0],
        vulns: vc[0],
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new StatController();
