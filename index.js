import express from "express";
import { PORT } from "./src/config/common";

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
