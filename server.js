import express from "express";
import process from "process";
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
    pool.query(
      "SELECT * FROM quotes WHERE id = $1",
      [taskId],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal server error");
        } else {
          res.send(result.rows);
        }
      }
    );
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
