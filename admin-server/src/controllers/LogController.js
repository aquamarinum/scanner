import LogService from "../services/LogService.js";

class LogController {
  async get(req, res) {
    try {
      const { id } = req.params;
      const log = await LogService.getById(id);
      if (log.length === 0) {
        return res.status(404).json({ message: "log not found" });
      }
      res.status(200).json(log);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getAll(req, res) {
    const { id, time, action, search, sortby, order, page, limit } = req.query;
    try {
      const logs = await LogService.getAll({
        id,
        time,
        action,
        search,
        sortby,
        order,
        page,
        limit,
      });
      if (logs.length === 0) {
        return res.status(404).json({ message: "logs not found" });
      }
      res.status(200).json(logs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async add(req, res) {
    try {
      const { action } = req.body;
      const state = await LogService.create({
        action,
      });
      if (!state) {
        return res.status(404).json({ message: "log not created" });
      }
      res.status(200).json({ message: "log added" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // async modify(req, res) {
  //   try {
  //     const { id, title, description, modified } = req.body;
  //     const status = await LogService.update({
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
      const status = await LogService.delete(id);
      if (!status) {
        return res.status(404).json({ message: "log not deleted" });
      }
      res.status(200).json({ message: "log deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new LogController();
