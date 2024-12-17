import express from "express";
import UserController from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.get("/users/:id", UserController.getUser);
userRouter.get("/users", UserController.getAllUsers);
userRouter.post("/users", UserController.addUser);
userRouter.put("/users", UserController.updateUser);
userRouter.delete("/users/:id", UserController.deleteUser);

export default userRouter;
