import { QuestionEligibility } from "../../core/entities/Eligibility";
import {
  Answer,
  Question,
  QuestionAnswerMap,
  Questionnaire,
} from "../../core/entities/Question";

export interface IReviewService {
  saveReview({
    questions,
    questionAnswerMap,
    answers,
  }: {
    questions: Question[];
    questionAnswerMap: QuestionAnswerMap;
    answers: Answer[];
    eligibilities: QuestionEligibility[];
  }): Promise<void>;
}
