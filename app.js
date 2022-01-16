import express from "express";
import cors from "cors";
import db from "./src/config/db";
import router from "./src/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

db.connection.on("error", (err) => {
  console.log(err);
});

export default app;
