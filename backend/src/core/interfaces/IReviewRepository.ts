import { QuestionEligibility } from "../entities/Eligibility";
import { Answer, Question, QuestionAnswerMap } from "../entities/Question";
import { Reviews } from "../entities/Reviews";

export interface IReviewRepository {
  saveReview({
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
  }): Promise<void>;
}
