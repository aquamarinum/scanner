import express, { Router } from "express";
import ScanController from "../controllers/ScanController";

const router = Router();

router.get("/scans/:id", ScanController.getScan);
router.get("/scans", ScanController.getAllScans);
router.post("/scans", ScanController.addScan);
router.put("/scans", ScanController.updateScan);
router.delete("/scans/:id", ScanController.deleteScan);

export default router;
