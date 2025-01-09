import { Repository } from "typeorm";
import { Users } from "../../core/entities/User";
import { IUserRepository } from "../../core/interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  constructor(private repository: Repository<Users>) {}

  async findAll(): Promise<Users[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Users | null> {
    return this.repository.findOne({ where: { id } });
  }

  async create(user: Users): Promise<Users> {
    return this.repository.save(user);
  }

  async update(id: number, user: Partial<Users>): Promise<Users> {
    await this.repository.update(id, user);
    return this.repository.findOne({ where: { id } }) as Promise<Users>;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
