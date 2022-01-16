import express from "express";
import cors from "cors";
import db from "./src/config/db";

const app = express();

app.use(cors());
app.use(express.json());

db.connection.on("error", (err) => {
  console.log(err);
});

export default app;
