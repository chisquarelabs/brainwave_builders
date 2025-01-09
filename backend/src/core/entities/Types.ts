import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  Unique,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { IsEmail, Length } from "class-validator";
import * as bcrypt from "bcrypt";
import { QuestionEligibility } from "./Eligibility";
import { Reviews } from "./Reviews";

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
export class Types {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true }) 
  name: string;

  @OneToMany((type) => QuestionEligibility, (eligibility) => eligibility.type)
  eligibility: QuestionEligibility[];

  @OneToMany((type) => Reviews, (review) => review.type)
  reviews: Reviews[];
}
