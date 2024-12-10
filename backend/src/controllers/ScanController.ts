import pool from "../db";
import { Request, Response } from "express";
import { Vulnerability } from "../models/Vulnerability";
import { Scan } from "../models/Scan";

const GET_QUERY = "select * from scans where userid = ?";
const GET_ALL_QUERY = "SELECT * FROM Scans";
const INSERT_QUERY =
  "INSERT INTO Scans (scanId, userId, started, ended, type, status) VALUES (?, ?, ?, ?, ?, ?)";
const UPDATE_QUERY = "UPDATE Scans SET status = ? WHERE scanId = ?";
const DELETE_QUERY = "DELETE FROM Scans WHERE scanId = ?";

class ScanController {
  async getScan(req: Request, res: Response): Promise<void> {
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
          return res.status(404).send("Scan not found");
        }
        //@ts-ignore
        res.json(results);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllScans(req: Request, res: Response): Promise<void> {
    const {
      started,
      ended,
      userid,
      type,
      status,
      sortby = "scanId",
      order = "ASC",
    } = req.query;

    try {
      let query = GET_ALL_QUERY + " WHERE 1=1 ";
      const params: string[] = [];
      // FILTER
      if (started) {
        query += " AND started >= ?";
        params.push(started as string);
      }
      if (ended) {
        query += " AND ended <= ?";
        params.push(ended as string);
      }
      if (userid) {
        query += " AND userId = ?";
        params.push(userid as string);
      }
      if (status) {
        query += " AND status = ?";
        params.push(status as string);
      }
      if (type) {
        query += " AND type = ?";
        params.push(type as string);
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

  async addScan(req: Request, res: Response): Promise<void> {
    try {
      const scan = req.body;
      console.log(scan);
      if (!scan) {
        res.status(400).json({
          error: "Scan data is required",
          scan,
        });
        return;
      }
      pool.query(
        INSERT_QUERY,
        [
          scan.scanid,
          scan.userid,
          scan.started,
          scan.ended,
          scan.type,
          scan.status,
        ],
        (err, results) => {
          if (err) {
            console.log("ERROR OCCURED", err);
            return res.status(500).send(err);
          }
          res.status(200).send("Scan added");
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateScan(req: Request, res: Response): Promise<void> {
    try {
      const scan = req.body;
      if (!scan) {
        res.status(400).json({ error: "Vulnerability data is required" });
        return;
      }
      pool.query(UPDATE_QUERY, [scan.status, scan.id], (err, results) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).send("Scan UPDATED");
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteScan(req: Request, res: Response): Promise<void> {
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
        res.status(200).send("Scan DELETED");
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ScanController();
