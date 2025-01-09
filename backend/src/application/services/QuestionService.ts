import { IUserService } from "../interfaces/IUserService";
import { IUserRepository } from "../../core/interfaces/IUserRepository";
import { JwtService } from "../../infrastructure/services/JwtService";
import { validate } from "class-validator";
import { IQuestionService } from "../interfaces/IQuestionService";
import { IQuestionRepository } from "../../core/interfaces/IQuestionRepository";
import { Answer, Question, Questionnaire } from "../../core/entities/Question";

export class QuestionService implements IQuestionService {
  constructor(private questionRepository: IQuestionRepository) {}

  async getLatestQuestionnaire(): Promise<Questionnaire> {
    return this.questionRepository.findLatestQuestionnaire();
  }

  flattenQuestions(questions: Question[]): {
    questionsArray: Question[];
    answersArray: Answer[];
  } {
    const answersArray: Answer[] = [];
    const questionsArray: Question[] = [];
    questions.forEach((question) => {
      questionsArray.push(question);
      question.answers.forEach((answer) => {
        answersArray.push(answer);
      });
    });
    return { questionsArray, answersArray };
  }
}
