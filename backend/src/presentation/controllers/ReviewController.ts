import { Request, Response } from "express";
import { IUserService } from "../../application/interfaces/IUserService";
import { IQuestionService } from "../../application/interfaces/IQuestionService";
import { IEligibilityService } from "../../application/interfaces/IEligibilityService";
import { IReviewService } from "../../application/interfaces/IReviewService";
import { Question } from "../../core/entities/Types";
import { QuestionAnswerMap } from "../../core/entities/Question";

export class ReviewController {
  constructor(
    private questionService: IQuestionService,
    private eligibilityService: IEligibilityService,
    private reviewService: IReviewService
  ) {}

  async savePatientReview(req: Request, res: Response): Promise<void> {
    try {
      const questions = req.body.questions as Question[];
      const questionAnswerMap = req.body.questionAnswerMap as QuestionAnswerMap;
      const allEligibilities =
        await this.eligibilityService.getAllEligibilities();
      const { answersArray: allAnswers, questionsArray: allQuestions } =
        this.questionService.flattenQuestions(questions);
      await this.reviewService.saveReview({
        questions: allQuestions,
        questionAnswerMap,
        answers: allAnswers,
        eligibilities: allEligibilities,
      });
      res.json({ message: "Review saved successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching Questionnaire" });
    }
  }
}
