import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  Unique,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { IsEmail, Length } from "class-validator";
import * as bcrypt from "bcrypt";
import { UserRoles } from "./UserRoles";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  unique_patient_id: string;

  @Column({ unique: true })
  phone_number: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  @Length(6, 100)
  password: string;

  @ManyToOne((type) => UserRoles, (type) => type.users)
  @JoinColumn({ name: "role_id" })
  role: UserRoles;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
