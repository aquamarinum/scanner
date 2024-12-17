import express from "express";
import ScanController from "../controllers/ScanController.js";

const scanRouter = express.Router();

scanRouter.get("/scans/:id", ScanController.getScan);
scanRouter.get("/scans", ScanController.getAllScans);
scanRouter.post("/scans", ScanController.addScan);
// scanRouter.put("/scans", ScanController.updateUser);
scanRouter.delete("/scans/:id", ScanController.deleteScan);

export default scanRouter;
