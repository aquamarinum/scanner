import express, { Router } from "express";
import ReportController from "../controllers/ReportController";

const router = Router();

router.get("/reports/:id", ReportController.getReport);
router.get("/reports", ReportController.getAllReports);
router.post("/reports", ReportController.addReport);
router.delete("/reports/:id", ReportController.deleteReport);

export default router;
