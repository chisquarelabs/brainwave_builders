import { Router } from "express";
import { authMiddleware } from "../presentation/middlewares/authMiddleWare";
import { UserController } from "../presentation/controllers/UserController";

export const UserRoutes = (router: Router, userController: UserController) => {
  router.post("/login", (req, res) => userController.login(req, res));
  router.get("/users", authMiddleware, (req, res) =>
    userController.getAllUsers(req, res)
  );
  router.get("/users/:id", authMiddleware, (req, res) =>
    userController.getUserById(req, res)
  );
  router.put("/users/:id", authMiddleware, (req, res) =>
    userController.updateUser(req, res)
  );
  router.delete("/users/:id", authMiddleware, (req, res) =>
    userController.deleteUser(req, res)
  );
};
