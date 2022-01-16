import express from "express";
import { getCategories } from "../controllers/categories";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Welcome to SaveTime API v2",
  });
});

router.get("/categories", getCategories);

export default router;
