import { QuestionEligibility } from "../../core/entities/Eligibility";
import { Question, Questionnaire } from "../../core/entities/Question";

export interface IEligibilityService {
  getEarlyExitQuestions(): Promise<QuestionEligibility[]>;
  getAllEligibilities(): Promise<QuestionEligibility[]>;
}
