import express from "express";
import ReportController from "../controllers/ReportController.js";

const reportRouter = express.Router();

reportRouter.get("/reports/:id", ReportController.get);
reportRouter.get("/reports", ReportController.getAll);
reportRouter.post("/reports", ReportController.add);
// reportRouter.put("/reports", ReportController.modify);
reportRouter.delete("/reports/:id", ReportController.remove);

export default reportRouter;
