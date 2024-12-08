import express, { Router } from "express";
import VulnController from "../controllers/VulnController";

const router = Router();

router.get("/vulnerabilities/:id", VulnController.getVulnerability);
router.get("/vulnerabilities", VulnController.getAllVulnerabilities);
router.post("/vulnerabilities", VulnController.addVulnerability);
router.put("/vulnerabilities", VulnController.updateVulnerability);
router.delete("/vulnerabilities/:id", VulnController.deleteVulnerability);

export default router;
