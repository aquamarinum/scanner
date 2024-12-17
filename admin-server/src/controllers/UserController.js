import UserService from "../services/UserService.js";

class UserController {
  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);
      if (user.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getAllUsers(req, res) {
    const { role, registrated, search, sortby, order, page, limit } = req.query;
    try {
      const users = await UserService.getAll({
        role,
        registrated,
        search,
        sortby,
        order,
        page,
        limit,
      });
      if (users.length === 0) {
        return res.status(404).json({ message: "users not found" });
      }
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async addUser(req, res) {
    try {
      const { id, email, role } = req.body;
      const status = await UserService.create({ id, email, role });
      if (!status) {
        return res.status(404).json({ message: "User not created" });
      }
      res.status(200).json({ message: "User added" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async updateUser(req, res) {
    try {
      const { id, email } = req.body;
      const status = await UserService.update({ email, id });
      if (!status) {
        return res.status(404).json({ message: "User not updated" });
      }
      res.status(200).json({ message: "User updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const status = await UserService.delete(id);
      if (!status) {
        return res.status(404).json({ message: "User not deleted" });
      }
      res.status(200).json({ message: "User deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new UserController();
