import ScanService from "../services/ScanService.js";

class ScanController {
  async getScan(req, res) {
    try {
      const { id } = req.params;
      const scan = await ScanService.getById(id);
      if (scan.length === 0) {
        return res.status(404).json({ message: "Scan not found" });
      }
      res.status(200).json(scan);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getAllScans(req, res) {
    const {
      id,
      userId,
      started,
      ended,
      type,
      status,
      sortby,
      order,
      page,
      limit,
    } = req.query;
    try {
      const scans = await ScanService.getAll({
        id,
        userId,
        started,
        ended,
        type,
        status,
        sortby,
        order,
        page,
        limit,
      });
      if (scans.length === 0) {
        return res.status(404).json({ message: "scans not found" });
      }
      res.status(200).json(scans);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async addScan(req, res) {
    try {
      const { id, userId, started, ended, type, status } = req.body;
      const state = await ScanService.create({
        id,
        userId,
        started,
        ended,
        type,
        status,
      });
      if (!state) {
        return res.status(404).json({ message: "Scan not created" });
      }
      res.status(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // async updateUser(req, res) {
  //   try {
  //     const { id, email } = req.body;
  //     const status = await ScanService.update({ email, id });
  //     if (!status) {
  //       return res.status(404).json({ message: "User not updated" });
  //     }
  //     res.status(200);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // }

  async deleteScan(req, res) {
    try {
      const { id } = req.params;
      const status = await ScanService.delete(id);
      if (!status) {
        return res.status(404).json({ message: "Scan not deleted" });
      }
      res.status(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new ScanController();
