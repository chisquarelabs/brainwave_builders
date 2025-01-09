import { DataSource } from "typeorm";
import { Users } from "../../core/entities/User";
import { config } from "../../config/config";
import { Questionnaire } from "../../core/entities/Question";
import { QuestionEligibility } from "../../core/entities/Eligibility";
import { Types } from "../../core/entities/Types";
import { UserRoles } from "../../core/entities/UserRoles";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: config.databaseUrl,
  ssl: true,
  entities: [Users, UserRoles, Questionnaire, QuestionEligibility, Types],
  migrations: [],
  migrationsTableName: "migrations",
  synchronize: true,
  logging: false,
});
