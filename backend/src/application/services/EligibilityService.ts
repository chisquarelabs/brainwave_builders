import { IUserService } from "../interfaces/IUserService";
import { IUserRepository } from "../../core/interfaces/IUserRepository";
import { JwtService } from "../../infrastructure/services/JwtService";
import { validate } from "class-validator";
import { IQuestionService } from "../interfaces/IQuestionService";
import { IQuestionRepository } from "../../core/interfaces/IQuestionRepository";
import { Question, Questionnaire } from "../../core/entities/Question";
import { IEligibilityRepository } from "../../core/interfaces/IEligibilityRepository";
import { QuestionEligibility } from "../../core/entities/Eligibility";
import { IEligibilityService } from "../interfaces/IEligibilityService";

export class EligibilityService implements IEligibilityService {
  constructor(private eligibilityRepository: IEligibilityRepository) {}

  async getEarlyExitQuestions(): Promise<QuestionEligibility[]> {
    return this.eligibilityRepository.findEarlyExitQuestions();
  }
  async getAllEligibilities(): Promise<QuestionEligibility[]> {
    return this.eligibilityRepository.getAllRecords();
  }
}
