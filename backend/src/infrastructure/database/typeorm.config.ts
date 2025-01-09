import { DataSource } from "typeorm";
import { User } from "../../core/entities/User";
import { config } from "../../config/config";
import { Questionnaire } from "../../core/entities/Question";
import { QuestionEligibility } from "../../core/entities/Eligibility";
import { Types } from "../../core/entities/Types";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: config.databaseUrl,
  ssl: true,
  entities: [User, Questionnaire, QuestionEligibility, Types],
  migrations: [],
  migrationsTableName: "migrations",
  synchronize: true,
  logging: false,
});
