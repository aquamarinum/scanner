import express, { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/users/:id", UserController.getUser);
router.get("/users", UserController.getAllUsers);
router.post("/users", UserController.createUser);
router.put("/users", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

export default router;
