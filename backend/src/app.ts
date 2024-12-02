import express from "express";
import pool from "./db";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/vulnerabilities", (req, res) => {
  pool.query("SELECT * FROM Vulnerabilities", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM Users", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  pool.query(
    "SELECT * FROM users WHERE userId = ?",
    [userId],
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
});

app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});
