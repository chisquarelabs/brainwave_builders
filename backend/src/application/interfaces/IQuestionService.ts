import { Answer, Question, Questionnaire } from "../../core/entities/Question";

export interface IQuestionService {
  getLatestQuestionnaire(): Promise<Questionnaire>;
  flattenQuestions(questions: Question[]): {
    questionsArray: Question[];
    answersArray: Answer[];
  };
}
