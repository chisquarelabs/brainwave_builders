import { Users } from "../entities/User";

export interface IUserRepository {
  findAll(): Promise<Users[]>;
  findById(id: number): Promise<Users | null>;
  create(user: Users): Promise<Users>;
  update(id: number, user: Partial<Users>): Promise<Users>;
  delete(id: number): Promise<void>;
}
