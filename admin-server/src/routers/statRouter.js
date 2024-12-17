import express from "express";
import StatController from "../controllers/StatController.js";

const statRouter = express.Router();

statRouter.get("/stats", StatController.get);

export default statRouter;
