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
  ColumnName,
  CreatedAt,
  Default,
  DeletedAt,
  NotNull,
  PrimaryKey,
  UpdatedAt,
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

  @DeletedAt
  @ColumnName("deletedAt")
  declare deleted_at: Date | null;

  @CreatedAt
  @ColumnName("createdAt")
  declare created_at: CreationOptional<Date>;

  @UpdatedAt
  @ColumnName("updatedAt")
  declare updated_at: CreationOptional<Date>;
}
