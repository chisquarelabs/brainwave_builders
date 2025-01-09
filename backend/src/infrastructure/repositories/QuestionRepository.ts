import { Repository } from "typeorm";
import { IQuestionRepository } from "../../core/interfaces/IQuestionRepository";
import { Question, Questionnaire } from "../../core/entities/Question";

export class QuestionRepository implements IQuestionRepository {
  constructor(private repository: Repository<Questionnaire>) {}

  async findLatestQuestionnaire(): Promise<Questionnaire> {
    const data = await this.repository.find({
      order: { version: "DESC" },
      take: 1,
    });
    return data[0];
  }
}
