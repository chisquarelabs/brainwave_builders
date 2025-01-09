import { Router } from "express";
import { authMiddleware } from "../presentation/middlewares/authMiddleWare";
import { UserController } from "../presentation/controllers/UserController";
import { QuestionController } from "../presentation/controllers/QuestionController";
import { ReviewController } from "../presentation/controllers/ReviewController";

export const ReviewRoutes = (
  router: Router,
  reviewController: ReviewController
) => {
  router.post("/review", (req, res) =>
    reviewController.savePatientReview(req, res)
  );
};
