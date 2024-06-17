import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  sql,
  DataTypes,
  CreationOptional,
} from "@sequelize/core";
import {
  Attribute,
  ColumnName,
  CreatedAt,
  Default,
  DeletedAt,
  NotNull,
  PrimaryKey,
  Unique,
  UpdatedAt,
} from "@sequelize/core/decorators-legacy";
import { IsEmail, IsIn } from "@sequelize/validator.js";
import { SmallIntegerDataType } from "sequelize/lib/data-types";
import { UUID } from "node:crypto";

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @Attribute(DataTypes.TEXT)
  declare dev_key: string;

  @Attribute(DataTypes.TEXT)
  declare prod_key: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare password: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(false)
  declare display: CreationOptional<boolean>;

  @Attribute(DataTypes.UUID)
  @NotNull
  @Unique
  @Default(sql.uuidV4)
  declare id: CreationOptional<UUID>;

  @Attribute(DataTypes.STRING)
  @NotNull
  @IsEmail
  @PrimaryKey
  declare email: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @IsIn(["BUYER:10"] as readonly any[])
  declare select_service: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare mobile_no: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(false)
  declare verified: CreationOptional<boolean>;

  @Attribute(DataTypes.INTEGER)
  declare otp: number | null;

  @Attribute(DataTypes.SMALLINT)
  @NotNull
  @Default(4)
  declare role: CreationOptional<SmallIntegerDataType>;

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

User.addScope("defaultScope", {
  attributes: { exclude: ["password"] },
});
