import { QuestionEligibility } from "../entities/Eligibility";

export interface IEligibilityRepository {
  findEarlyExitQuestions(): Promise<QuestionEligibility[]>;
  getAllRecords(): Promise<QuestionEligibility[]>;
}
