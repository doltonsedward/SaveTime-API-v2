import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Hello..",
  });
});

export default router;
