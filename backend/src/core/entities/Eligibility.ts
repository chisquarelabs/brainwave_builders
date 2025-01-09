import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  Unique,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { IsEmail, Length } from "class-validator";
import * as bcrypt from "bcrypt";
import { Types } from "./Types";

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

@Entity()
export class QuestionEligibility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  unique_question_id: string;

  @Column({ nullable: true })
  unique_answer_id: string;

  @Column()
  version: number;

  @Column({ nullable: true })
  score: number;

  @ManyToOne((type) => Types, (type) => type.eligibility)
  @JoinColumn({ name: "type_id" })
  type: Types;

  //   @CreateDateColumn({
  //     type: "timestamp",
  //     default: () => "CURRENT_TIMESTAMP(6)",
  //   })
  //   created_at: Date;
}
