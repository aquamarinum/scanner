import pool from "../db";
import { Request, Response } from "express";
import { User } from "../models/User";

const GET_QUERY = "SELECT * FROM users WHERE userId = ?";
const GET_ALL_QUERY = "SELECT * FROM Users";
const INSERT_QUERY =
  "INSERT INTO Users (userId, email, registrated, role) VALUES (?, ?, default, default)";
const UPDATE_QUERY = "UPDATE Users SET email = ?, role = ? WHERE userId = ?";
const DELETE_QUERY = "DELETE FROM users WHERE userId = ?";
class UserController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ error: "ID is required" });
        return;
      }

      pool.query(GET_QUERY, [id], (err, results) => {
        if (err) {
          return res.status(500).send(err);
        }
        //@ts-ignore
        if (results.length === 0) {
          return res.status(404).send("User not found");
        }
        //@ts-ignore
        res.json(results[0]);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    const {
      priority,
      search,
      registrated,
      email,
      role,
      sortby = "userId",
      order = "ASC",
    } = req.query;

    try {
      let query = GET_ALL_QUERY + " WHERE 1=1 ";
      const params: string[] = [];
      if (priority !== "мнеможно") {
        res.status(403).json({ error: "Forbidden" });
        return;
      }
      // SEARCH
      if (search) {
        query += " AND (email LIKE ?)";
        params.push(`%${search}%`);
      }
      // FILTER
      if (email) {
        query += " AND email = ?";
        params.push(email as string);
      }
      if (role) {
        query += " AND role = ?";
        params.push(role as string);
      }
      if (registrated) {
        query += " AND registrated = ?";
        params.push(registrated as string);
      }
      //SORT
      query += `ORDER BY ${sortby} ${order === "desc" ? "DESC" : "ASC"}`;
      // FETCHING
      pool.query(query, params, (err, results) => {
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
      pool.query(INSERT_QUERY, [user.id, user.email], (err, results) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).send("USER CREATED");
      });
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
        UPDATE_QUERY,
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
      pool.query(DELETE_QUERY, [id], (err, results) => {
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
