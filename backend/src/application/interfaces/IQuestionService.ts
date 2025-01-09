import { Question, Questionnaire } from "../../core/entities/Question";

export interface IQuestionService {
  getLatestQuestionnaire(): Promise<Questionnaire>;
}
