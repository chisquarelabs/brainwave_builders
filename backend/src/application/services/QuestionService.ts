import { IUserService } from "../interfaces/IUserService";
import { IUserRepository } from "../../core/interfaces/IUserRepository";
import { JwtService } from "../../infrastructure/services/JwtService";
import { validate } from "class-validator";
import { IQuestionService } from "../interfaces/IQuestionService";
import { IQuestionRepository } from "../../core/interfaces/IQuestionRepository";
import { Question, Questionnaire } from "../../core/entities/Question";

export class QuestionService implements IQuestionService {
  constructor(private questionRepository: IQuestionRepository) {}

  async getLatestQuestionnaire(): Promise<Questionnaire> {
    return this.questionRepository.findLatestQuestionnaire();
  }
}
