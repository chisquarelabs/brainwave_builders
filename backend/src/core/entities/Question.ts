import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  Unique,
  CreateDateColumn,
} from "typeorm";
import { IsEmail, Length } from "class-validator";
import * as bcrypt from "bcrypt";

export enum QuestionType {
  DATE = "date",
  RADIO = "radio",
  INPUT = "input",
}

export interface Answer {
  id: string;
  early_exit?: boolean;
  evaluate?: boolean;
  answer_text: string;
  question_id: string;
  sort_order: number;
  sub_questions?: Question[] | null;
  additional_questions?: Question[] | null;
  selected?: boolean;
  isValid?: boolean;
  dob?: string;
  answer_type?: string;
}

export interface Question {
  id: string;
  page: number;
  current?: boolean;
  wizard_step: number;
  review_title: string;
  wizard_title: string;
  question_text: string;
  question_type: QuestionType;
  question_description?: string;
  question_sort_order?: number;
  question_sub_title?: string;
  answers: Answer[] | null;
  radio_sub_questions?: Question[];
  question_context?: string;
  validation?: { min?: number | null; max?: number | null; regex?: string };
  medication_sub_questions?: Question[];
}

export type QuestionAnswerMap = {
  [key: string]: Answer;
};

@Entity()
export class Questionnaire {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("json", { nullable: true })
  questionnaire_json: Question[] | null;

  @Column()
  version: number;

  //   @CreateDateColumn({
  //     type: "timestamp",
  //     default: () => "CURRENT_TIMESTAMP(6)",
  //   })
  //   created_at: Date;
}
