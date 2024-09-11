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
import { IsEmail } from "@sequelize/validator.js";
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

  @Attribute(DataTypes.STRING)
  declare address: string;

  @Attribute(DataTypes.STRING)
  @IsEmail
  @NotNull
  declare company_email: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(false)
  declare prod_verified: CreationOptional<boolean>;

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
  declare mobile_no: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(false)
  declare verified: CreationOptional<boolean>;

  @Attribute(DataTypes.INTEGER)
  declare otp: number | null;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  @Default(4)
  declare role: CreationOptional<number>;

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
