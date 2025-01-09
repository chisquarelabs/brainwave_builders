import { IUserService } from "../interfaces/IUserService";
import { IUserRepository } from "../../core/interfaces/IUserRepository";
import { JwtService } from "../../infrastructure/services/JwtService";
import { validate } from "class-validator";
import { IQuestionService } from "../interfaces/IQuestionService";
import { IQuestionRepository } from "../../core/interfaces/IQuestionRepository";
import {
  Answer,
  Question,
  QuestionAnswerMap,
  Questionnaire,
} from "../../core/entities/Question";
import { IEligibilityRepository } from "../../core/interfaces/IEligibilityRepository";
import { QuestionEligibility } from "../../core/entities/Eligibility";
import { IEligibilityService } from "../interfaces/IEligibilityService";
import { IReviewService } from "../interfaces/IReviewService";
import { IReviewRepository } from "../../core/interfaces/IReviewRepository";
import { Reviews } from "../../core/entities/Reviews";

export class ReviewService implements IReviewService {
  constructor(private reviewRepository: IReviewRepository) {}

  async saveReview({
    questions,
    questionAnswerMap,
    answers,
    eligibilities,
  }: {
    questions: Question[];
    questionAnswerMap: QuestionAnswerMap;
    answers: Answer[];
    eligibilities: QuestionEligibility[];
  }): Promise<void> {
    let score = 0;
    const highlightedQuestions: Map<string, boolean> = new Map();
    let earlyExitQuestion = {};
    for (const eligibility of eligibilities) {
      const selectedAnswer = questionAnswerMap[eligibility.unique_question_id];
      if (selectedAnswer) {
        if (eligibility.type?.name == "early_exit_question") {
          earlyExitQuestion = eligibility;
          break;
        }
        if (eligibility.type?.name == "highlight_question") {
          highlightedQuestions.set(eligibility.unique_question_id, true);
        }
        if (score) {
          score += eligibility.score;
        }
      }
    }
    // const review: Reviews = {
    //   review_result: JSON.stringify({
    //     highlightedQuestions,
    //     earlyExitQuestion,
    //     questionAnswerMap,
    //   }),
    //   total_score: score,
    // //   ceUser: { id: 1 },
    // };
    // await this.reviewRepository.saveReview(review);
  }
}
