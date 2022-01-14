import express from "express";
import cors from "cors";
import { PORT } from "./src/config/common";
import db from "./src/config/db";

const app = express();

app.use(cors());
app.use(express.json());

db.then(() => {
  console.log("connected to database");
}).catch((error) => {
  console.log("error happend when to reach mongodb collection", error);
});

export default app;
