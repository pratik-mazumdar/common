import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  sql,
  DataTypes,
  Sequelize,
} from "@sequelize/core";
import {
  Attribute,
  Default,
  DeletedAt,
  NotNull,
  PrimaryKey,
  Table,
} from "@sequelize/core/decorators-legacy";
import { IsEmail, IsIn } from "@sequelize/validator.js";
import { SmallIntegerDataType } from "sequelize/lib/data-types";
import { UUID } from "node:crypto";

@Table({ noPrimaryKey: true })
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @DeletedAt
  declare deletedAt: Date | null;
  declare createdAt: any;
  declare updatedAt: any;

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
  declare display: boolean;

  @Attribute(DataTypes.UUID)
  @NotNull
  @Default(sql.uuidV4)
  declare id: UUID;

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
  declare verified: boolean;

  @Attribute(DataTypes.INTEGER)
  declare otp: number | null;

  @Attribute(DataTypes.SMALLINT)
  @NotNull
  @Default(4)
  declare role: SmallIntegerDataType;
}
