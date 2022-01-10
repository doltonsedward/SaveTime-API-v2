import express from "express";

const app = express();
app.use(express.json());

const PORT = 7500;
app.listen(PORT || process.env.PORT, () =>
  console.log(`Server running on ${PORT}`)
);
