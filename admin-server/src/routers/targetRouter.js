import express from "express";
import TargetController from "../controllers/TargetController.js";

const targetRouter = express.Router();

targetRouter.get("/targets/:id", TargetController.get);
targetRouter.get("/targets", TargetController.getAll);
targetRouter.post("/targets", TargetController.add);
// targetRouter.put("/targets", TargetController.modify);
targetRouter.delete("/targets/:id", TargetController.remove);

export default targetRouter;
