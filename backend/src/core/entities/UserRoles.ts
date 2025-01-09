import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  Unique,
  OneToMany,
} from "typeorm";
import { IsEmail, Length } from "class-validator";
import * as bcrypt from "bcrypt";
import { Users } from "./User";

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany((type) => Users, (user) => user.role)
  users: Users[];
}
