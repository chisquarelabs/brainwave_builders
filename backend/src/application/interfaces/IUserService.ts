import { Users } from "../../core/entities/User";

export interface IUserService {
  getAllUsers(): Promise<Users[]>;
  getUserById(id: number): Promise<Users | null>;
  createUser(user: Users): Promise<Users>;
  updateUser(id: number, user: Partial<Users>): Promise<Users>;
  deleteUser(id: number): Promise<void>;
  login(
    email: string,
    password: string
  ): Promise<{ token: string; user: Users } | null>;
}
