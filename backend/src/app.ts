import cors from "cors";
import express from "express";
import pool from "./db";

import userRouter from "./routers/userRoter";

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("successfully connected");
});

app.get("/test", (req, res) => {
  console.log("BODY - ", req.body);
  console.log("QUERY - ", req.query);
  res.status(200).send("ok");
});

app.post("/test", (req, res) => {
  console.log("BODY - ", req.body);
  console.log("QUERY - ", req.query);
  res.status(200).send("ok");
});

app.get("/vulnerabilities", (req, res) => {
  pool.query("SELECT * FROM Vulnerabilities", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});
//@ts-ignore
app.post("/users", (req, res) => {
  console.log(req.body);
  const { id, username, email, password } = req.body;
  if (!email || !password || !id || !username) {
    return res.status(400).send("Title and content are required.");
  }

  const sql = `INSERT INTO users (userId, username, email, passwordHash) VALUES (?, ?, ?, ?)`;
  pool.query(sql, [id, username, email, password], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201);
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
