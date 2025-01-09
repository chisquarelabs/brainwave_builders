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
