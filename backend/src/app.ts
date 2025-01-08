import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./infrastructure/database/typeorm.config";
import { UserRepository } from "./infrastructure/repositories/UserRepository";
import { UserService } from "./application/services/UserService";
import { UserController } from "./presentation/controllers/UserController";
import { User } from "./core/entities/User";
import { authMiddleware } from "./presentation/middlewares/authMiddleWare";

export const createApp = async (config) => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const dataBaseInstance = AppDataSource;

  console.log("Connecting to the database...");
  await dataBaseInstance.initialize();
  console.log("Database connected successfully");

  // Repositories
  const userRepository = new UserRepository(
    dataBaseInstance.getRepository(User)
  );

  // Services
  const userService = new UserService(userRepository);

  // Controllers
  const userController = new UserController(userService);

  // Routes
  app.post("/users", (req, res) => userController.createUser(req, res));

  app.post("/login", (req, res) => userController.login(req, res));
  app.get("/users", authMiddleware, (req, res) =>
    userController.getAllUsers(req, res)
  );
  app.get("/users/:id", authMiddleware, (req, res) =>
    userController.getUserById(req, res)
  );
  app.put("/users/:id", authMiddleware, (req, res) =>
    userController.updateUser(req, res)
  );
  app.delete("/users/:id", authMiddleware, (req, res) =>
    userController.deleteUser(req, res)
  );

  return app;
};
