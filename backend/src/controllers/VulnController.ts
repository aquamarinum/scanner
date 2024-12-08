import pool from "../db";
import { Request, Response } from "express";
import { Vulnerability } from "../models/Vulnerability";

const GET_QUERY = "SELECT * FROM Vulnerabilities WHERE vulnerabilityId = ?";
const GET_ALL_QUERY = "SELECT * FROM Vulnerabilities";
const INSERT_QUERY =
  "INSERT INTO Vulnerabilities (vulnerabilityId, title, description, danger, published, modified) VALUES (?, ?, ?, ?, ?, ?)";
const UPDATE_QUERY =
  "UPDATE Vulnerabilities SET title = ?, description = ?, danger = ?, modified = ? WHERE vulnerabilityId = ?";
const DELETE_QUERY = "DELETE FROM Vulnerabilities WHERE vulnerabilityId = ?";

class VulnController {
  async getVulnerability(req: Request, res: Response): Promise<void> {
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
          return res.status(404).send("Vulnerability not found");
        }
        //@ts-ignore
        res.json(results[0]);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllVulnerabilities(req: Request, res: Response): Promise<void> {
    const {
      search,
      published,
      modified,
      danger,
      sortby = "vulnerabilityId",
      order = "ASC",
    } = req.query;

    try {
      let query = GET_ALL_QUERY + " WHERE 1=1 ";
      const params: string[] = [];
      // SEARCH
      if (search) {
        query += " AND (title LIKE ?)";
        params.push(`%${search}%`);
      }
      // FILTER
      if (danger) {
        query += " AND danger = ?";
        params.push(danger as string);
      }
      if (published) {
        query += " AND published = ?";
        params.push(published as string);
      }
      if (modified) {
        query += " AND modified = ?";
        params.push(modified as string);
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

  async addVulnerability(req: Request, res: Response): Promise<void> {
    try {
      const vulnerability = req.body;
      if (!vulnerability) {
        res.status(400).json({ error: "Vulnerability data is required" });
        return;
      }
      pool.query(
        INSERT_QUERY,
        [
          vulnerability.id,
          vulnerability.title,
          vulnerability.description,
          vulnerability.danger,
          vulnerability.published,
          vulnerability.modified,
        ],
        (err, results) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.status(200).send("Vulnerability added");
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateVulnerability(req: Request, res: Response): Promise<void> {
    try {
      const vulnerability = req.body;
      if (!vulnerability) {
        res.status(400).json({ error: "Vulnerability data is required" });
        return;
      }
      pool.query(
        UPDATE_QUERY,
        [
          vulnerability.title,
          vulnerability.description,
          vulnerability.danger,
          vulnerability.modified,
          vulnerability.id,
        ],
        (err, results) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.status(200).send("Vulnerability UPDATED");
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteVulnerability(req: Request, res: Response): Promise<void> {
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
        res.status(200).send("Vulnerability DELETED");
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new VulnController();
