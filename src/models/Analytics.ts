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

export class Analytics extends Model<
  InferAttributes<Analytics>,
  InferCreationAttributes<Analytics>
> {
  @Attribute(DataTypes.UUID)
  @NotNull
  @PrimaryKey
  @Default(randomUUID())
  declare id: CreationOptional<UUID>;

  @Attribute(DataTypes.UUID)
  @NotNull
  declare user_id: CreationOptional<UUID>;
}
