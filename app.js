import express from "express";
import cors from "cors";
// import { PORT } from "./src/config/common";
// import db from "./src/config/db";

const app = express();

app.use(cors());
app.use(express.json());

export default app;
