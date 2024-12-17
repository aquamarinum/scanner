import express from "express";
import VulnerabilityController from "../controllers/VulnerabilityController.js";

const vulnRouter = express.Router();

vulnRouter.get("/vulns/:id", VulnerabilityController.get);
vulnRouter.get("/vulns", VulnerabilityController.getAll);
vulnRouter.post("/vulns", VulnerabilityController.add);
vulnRouter.put("/vulns", VulnerabilityController.modify);
vulnRouter.delete("/vulns/:id", VulnerabilityController.remove);

export default vulnRouter;
