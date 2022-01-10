import express from "express";

const app = express();
const PORT = 7500;

app.listen(PORT || process.env.PORT, () =>
  console.log(`Server running on ${PORT}`)
);
