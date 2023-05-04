import express from "express";
import process from "process";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;
import { config } from "dotenv";
config();
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/test", (req, res) => {
  res.json("Hello World!");
});

app.get("/api/quotes", (req, res) => {
  pool.query("SELECT * FROM quotes", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error querying the database");
    } else {
      res.send(result.rows);
    }
  });
});

app.get("/api/quotes/:id", (req, res) => {
  const taskId = req.params.id;
  pool.query("SELECT * FROM quotes WHERE id = $1", [taskId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    } else {
      res.send(result.rows);
    }
  });
});

app.post("/api/quotes", (req, res) => {
  console.log(req.body);
  const { quote } = req.body;
  pool.query(
    "INSERT INTO quotes (quote) VALUES ($1) RETURNING *",
    [quote],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(201).json(result.rows[0]);
      }
    }
  );
});

app.delete("/api/quotes/:id", (req, res) => {
  const quoteId = req.params.id;
  pool.query("DELETE FROM quotes WHERE id = $1", [quoteId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    } else if (result.rowCount === 0) {
      res.status(404).send(`Quote with ID ${quoteId} not found`);
    } else {
      res.status(204).send(`Quote was successfully deleted`);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
