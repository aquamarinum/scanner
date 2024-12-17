import LogService from "../services/LogService.js";
import TargetService from "../services/TargetService.js";

class TargetController {
  async get(req, res) {
    try {
      const { id } = req.params;
      const target = await TargetService.getById(id);
      if (target.length === 0) {
        return res.status(404).json({ message: "Target not found" });
      }
      res.status(200).json(target);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getAll(req, res) {
    const {
      id,
      scanId,
      name,
      hostname,
      operationSystem,
      created,
      search,
      sortby,
      order,
      page,
      limit,
    } = req.query;
    try {
      const targets = await TargetService.getAll({
        id,
        scanId,
        name,
        hostname,
        operationSystem,
        created,
        search,
        sortby,
        order,
        page,
        limit,
      });
      if (targets.length === 0) {
        return res.status(404).json({ message: "targets not found" });
      }
      res.status(200).json(targets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async add(req, res) {
    try {
      const { id, scanId, name, hostname, operationSystem, created } = req.body;
      const state = await TargetService.create({
        id,
        scanId,
        name,
        hostname,
        operationSystem,
        created,
      });
      await LogService.create({ action: "CREATE" });
      if (!state) {
        return res.status(404).json({ message: "target not created" });
      }
      res.status(200).json({ message: "target added" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // async modify(req, res) {
  //   try {
  //     const { id, title, description, modified } = req.body;
  //     const status = await TargetService.update({
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
      const status = await TargetService.delete(id);
      await LogService.create({ action: "DELETE" });
      if (!status) {
        return res.status(404).json({ message: "target not deleted" });
      }
      res.status(200).json({ message: "target deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new TargetController();
