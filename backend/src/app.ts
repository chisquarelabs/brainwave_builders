import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./infrastructure/database/typeorm.config";
import { UserRepository } from "./infrastructure/repositories/UserRepository";
import { UserService } from "./application/services/UserService";
import { UserController } from "./presentation/controllers/UserController";
import { Users } from "./core/entities/User";
import { authMiddleware } from "./presentation/middlewares/authMiddleWare";
import { UserRoutes } from "./routes/UserRoutes";
import { Question, Questionnaire } from "./core/entities/Question";
import { QuestionRoutes } from "./routes/QuestionRoutes";
import { QuestionRepository } from "./infrastructure/repositories/QuestionRepository";
import { QuestionService } from "./application/services/QuestionService";
import { QuestionController } from "./presentation/controllers/QuestionController";
import { EligibilityRepository } from "./infrastructure/repositories/EligibilityRepository";
import { QuestionEligibility } from "./core/entities/Eligibility";
import { EligibilityService } from "./application/services/EligibilityService";
import { ReviewRepository } from "./infrastructure/repositories/ReviewRepository";
import { Reviews } from "./core/entities/Reviews";
import { ReviewService } from "./application/services/ReviewService";
import { ReviewController } from "./presentation/controllers/ReviewController";
import { ReviewRoutes } from "./routes/ReviewRoutes";

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
    dataBaseInstance.getRepository(Users)
  );
  const questionRepository = new QuestionRepository(
    dataBaseInstance.getRepository(Questionnaire)
  );

  const eligibilityRepository = new EligibilityRepository(
    dataBaseInstance.getRepository(QuestionEligibility)
  );

  const reviewRepository = new ReviewRepository(
    dataBaseInstance.getRepository(Reviews)
  );

  // Services
  const userService = new UserService(userRepository);
  const questionService = new QuestionService(questionRepository);
  const eligibilityService = new EligibilityService(eligibilityRepository);
  const reviewService = new ReviewService(reviewRepository);

  // Controllers
  const userController = new UserController(userService);
  const questionController = new QuestionController(
    questionService,
    eligibilityService
  );
  const reviewController = new ReviewController(
    questionService,
    eligibilityService,
    reviewService
  );

  const router = express.Router();

  app.use("/", router);

  // Routes
  UserRoutes(router, userController);
  QuestionRoutes(router, questionController);
  ReviewRoutes(router, reviewController);

  return app;
};
