import { Repository } from "typeorm";
import { IQuestionRepository } from "../../core/interfaces/IQuestionRepository";
import {
  Answer,
  Question,
  QuestionAnswerMap,
  Questionnaire,
} from "../../core/entities/Question";
import { QuestionEligibility } from "../../core/entities/Eligibility";
import { IEligibilityRepository } from "../../core/interfaces/IEligibilityRepository";
import { IReviewRepository } from "../../core/interfaces/IReviewRepository";
import { Reviews } from "../../core/entities/Reviews";

export class ReviewRepository implements IReviewRepository {
  constructor(private repository: Repository<Reviews>) {}

  async saveReview({
    questions,
    questionAnswerMap,
    answers,
    score,
  }: {
    questions: Question[];
    questionAnswerMap: QuestionAnswerMap;
    answers: Answer[];
    eligibilities: QuestionEligibility[];
    score: number;
  }): Promise<void> {
    await this.repository.save({
      review_result: JSON.stringify({ questions, questionAnswerMap, answers }),
      total_score: score,
    });
  }
}
