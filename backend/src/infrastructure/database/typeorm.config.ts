import { DataSource } from "typeorm";
import { User } from "../../core/entities/User";
import { config } from "../../config/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: config.databaseUrl,
  ssl: true,
  entities: [User],
  migrations: [],
  migrationsTableName: "migrations",
  synchronize: true,
  logging: false,
});
