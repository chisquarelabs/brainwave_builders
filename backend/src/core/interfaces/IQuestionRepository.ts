import { Questionnaire } from "../entities/Question";

export interface IQuestionRepository {
  findLatestQuestionnaire(): Promise<Questionnaire>;
}
