import { Request, Response } from "express";
import { IUserService } from "../../application/interfaces/IUserService";
import { IQuestionService } from "../../application/interfaces/IQuestionService";
import { IEligibilityService } from "../../application/interfaces/IEligibilityService";

export class QuestionController {
  constructor(
    private questionService: IQuestionService,
    private eligibilityService: IEligibilityService
  ) {}

  async getLatestQuestionnaireAndEarlyExitConditions(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const questions = await this.questionService.getLatestQuestionnaire();
      const earlyExitQuestions =
        await this.eligibilityService.getEarlyExitQuestions();
      res.json({ questions: questions.questionnaire_json, earlyExitQuestions });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching Questionnaire" });
    }
  }
}
