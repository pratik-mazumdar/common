import { randomUUID, UUID } from "node:crypto";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "@sequelize/core";
import {
  Attribute,
  Default,
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { IsEmail } from "@sequelize/validator.js";

export class Analytics extends Model<
  InferAttributes<Analytics>,
  InferCreationAttributes<Analytics>
> {
  @Attribute(DataTypes.UUID)
  @NotNull
  @PrimaryKey
  @Default(randomUUID())
  declare id: CreationOptional<UUID>;

  @Attribute(DataTypes.STRING)
  @NotNull
  @IsEmail
  declare user_email: CreationOptional<string>;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare search_count: number;
}
