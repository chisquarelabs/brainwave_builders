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
import { Users } from "./User";

@Entity()
export class Reviews {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  unique_patient_id: string;

  @Column("json", { nullable: false })
  review_result: string;

  @Column()
  total_score: number;

  @ManyToOne((type) => Types, (type) => type.reviews)
  @JoinColumn({ name: "type_id" })
  type: Types;

  @ManyToOne((type) => Users, (user) => user.reviews)
  @JoinColumn({ name: "ce_user_id" })
  ceUser: Users;

  //   @CreateDateColumn({
  //     type: "timestamp",
  //     default: () => "CURRENT_TIMESTAMP(6)",
  //   })
  //   created_at: Date;
}
