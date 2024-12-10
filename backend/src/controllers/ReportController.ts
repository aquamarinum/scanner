import pool from "../db";
import { Request, Response } from "express";
import { User } from "../models/User";

const GET_QUERY = "SELECT * FROM Reports WHERE reportId = ?";
const GET_ALL_QUERY = "SELECT * FROM Reports";
const INSERT_QUERY =
  "INSERT INTO Reports (reportId, scanId, created, source, format) VALUES (?, ?, default, 'server', default)";
const DELETE_QUERY = "DELETE FROM Reports WHERE reportId = ?";
class ReportController {
  async getReport(req: Request, res: Response): Promise<void> {
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
          return res.status(404).send("Report not found");
        }
        //@ts-ignore
        res.json(results[0]);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllReports(req: Request, res: Response): Promise<void> {
    const {
      priority,
      created,
      format,
      scanid,
      sortby = "reportId",
      order = "ASC",
    } = req.query;

    try {
      let query = GET_ALL_QUERY + " WHERE 1=1 ";
      const params: string[] = [];
      if (priority !== "мнеможно") {
        res.status(403).json({ error: "Forbidden" });
        return;
      }
      // FILTER
      if (created) {
        query += " AND created = ?";
        params.push(created as string);
      }
      if (format) {
        query += " AND format = ?";
        params.push(format as string);
      }
      if (scanid) {
        query += " AND scanid = ?";
        params.push(scanid as string);
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

  async addReport(req: Request, res: Response): Promise<void> {
    try {
      const rep = req.body;
      if (!rep) {
        res.status(400).json({ error: "Report data is required" });
        return;
      }
      pool.query(INSERT_QUERY, [rep.reportid, rep.scanid], (err, results) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).send("Report CREATED");
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteReport(req: Request, res: Response): Promise<void> {
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
        res.status(200).send("Report DELETED");
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ReportController();
