import { Sequelize } from "sequelize";

/**
 * TODO
 * Need to change this to sequelize >7.0
 *
 */

const env: Record<any, any> = process.env;

const sequelize: Sequelize = new Sequelize(
  env.DATABASE_NAME,
  env.DATABASE_USERNAME,
  env.DATABASE_PASSWORD,
  {
    host: "postgres",
    dialect: "postgres",
    port: 5435,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
