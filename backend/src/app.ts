import express from "express";
import pool from "./db";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  pool.query("SELECT * FROM Test", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});
