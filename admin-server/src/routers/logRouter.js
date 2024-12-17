import express from "express";
import LogController from "../controllers/LogController.js";

const logRouter = express.Router();

logRouter.get("/logs/:id", LogController.get);
logRouter.get("/logs", LogController.getAll);
logRouter.post("/logs", LogController.add);
// logRouter.put("/logs", LogController.modify);
logRouter.delete("/logs/:id", LogController.remove);

export default logRouter;
