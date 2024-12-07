import { error } from "console";
import pool from "../db";
import { Request, Response } from "express";
import { User } from "../models/User";

class UserController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ error: "ID is required" });
        return;
      }
      pool.query(
        "SELECT * FROM users WHERE userId = ?",
        [id],
        (err, results) => {
          if (err) {
            return res.status(500).send(err);
          }
          //@ts-ignore
          if (results.length === 0) {
            return res.status(404).send("User not found");
          }
          //@ts-ignore
          res.json(results[0]);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const token = req.query.adminToken;
      if (token !== "мнеможно") {
        res.status(403).json({ error: "Forbidden" });
        return;
      }
      pool.query("SELECT * FROM Users", (err, results) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.json(results);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user: User = req.body;
      if (!user) {
        res.status(400).json({ error: "User data is required" });
        return;
      }
      pool.query(
        "INSERT INTO Users (userId, email, registrated, role) VALUES (?, ?, default, default)",
        [user.id, user.email],
        (err, results) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.status(200).send("USER CREATED");
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const user: User = req.body;
      if (!user) {
        res.status(400).json({ error: "User data is required" });
        return;
      }
      pool.query(
        "UPDATE Users SET email = ?, role = ? WHERE userId = ?",
        [user.email, user.role, user.id],
        (err, results) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.status(200).send("USER UPDATED");
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ error: "ID is required" });
        return;
      }
      pool.query("DELETE FROM users WHERE userId = ?", [id], (err, results) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).send("USER DELETED");
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UserController();
