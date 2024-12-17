import ReportService from "../services/ReportService.js";

class ReportController {
  async get(req, res) {
    try {
      const { id } = req.params;
      const report = await ReportService.getById(id);
      if (report.length === 0) {
        return res.status(404).json({ message: "report not found" });
      }
      res.status(200).json(report);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getAll(req, res) {
    const {
      id,
      scanId,
      created,
      source,
      format,
      search,
      sortby,
      order,
      page,
      limit,
    } = req.query;
    try {
      const reports = await ReportService.getAll({
        id,
        scanId,
        created,
        source,
        format,
        search,
        sortby,
        order,
        page,
        limit,
      });
      if (reports.length === 0) {
        return res.status(404).json({ message: "reports not found" });
      }
      res.status(200).json(reports);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async add(req, res) {
    try {
      const { id, scanId, created, source, format } = req.body;
      const state = await ReportService.create({
        id,
        scanId,
        created,
        source,
        format,
      });
      if (!state) {
        return res.status(404).json({ message: "report not created" });
      }
      res.status(200).json({ message: "report added" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // async modify(req, res) {
  //   try {
  //     const { id, title, description, modified } = req.body;
  //     const status = await ReportService.update({
  //       id,
  //       title,
  //       description,
  //       modified,
  //     });
  //     if (!status) {
  //       return res.status(404).json({ message: "Vuln not updated" });
  //     }
  //     res.status(200).json("Vuln UPDATED");
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // }

  async remove(req, res) {
    try {
      const { id } = req.params;
      const status = await ReportService.delete(id);
      if (!status) {
        return res.status(404).json({ message: "report not deleted" });
      }
      res.status(200).json({ message: "report deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new ReportController();
