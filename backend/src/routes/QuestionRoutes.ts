import { Router } from "express";
import { authMiddleware } from "../presentation/middlewares/authMiddleWare";
import { UserController } from "../presentation/controllers/UserController";
import { QuestionController } from "../presentation/controllers/QuestionController";

export const QuestionRoutes = (
  router: Router,
  questionController: QuestionController
) => {
  router.get("/questions", (req, res) =>
    questionController.getLatestQuestionnaireAndEarlyExitConditions(req, res)
  );
};
