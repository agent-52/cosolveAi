import express from "express";

const mainRouter = express.Router();

mainRouter.get("/api", (req, res) => {
  res.json({
    message: "hi from backend",
  });
});

export { mainRouter };
