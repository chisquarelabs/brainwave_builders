import { Repository } from "typeorm";
import { IQuestionRepository } from "../../core/interfaces/IQuestionRepository";
import { Question, Questionnaire } from "../../core/entities/Question";
import { QuestionEligibility } from "../../core/entities/Eligibility";
import { IEligibilityRepository } from "../../core/interfaces/IEligibilityRepository";

export class EligibilityRepository implements IEligibilityRepository {
  constructor(private repository: Repository<QuestionEligibility>) {}

  async findEarlyExitQuestions(): Promise<QuestionEligibility[]> {
    const photos = await this.repository
      .createQueryBuilder("question_eligibility")
      .innerJoinAndSelect("question_eligibility.type", "type")
      .where("type.name = :name", {
        name: "early_exit_question",
      })
      .getMany();
    return photos;
  }
}
