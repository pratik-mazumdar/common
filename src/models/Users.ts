import {
  Model,
  InferAttributes,
  InferCreationAttributes,
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
  UpdatedAt,
} from "@sequelize/core/decorators-legacy";
import { IsEmail } from "@sequelize/validator.js";

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @Attribute(DataTypes.TEXT)
  declare dev_key: CreationOptional<string>;

  @Attribute(DataTypes.TEXT)
  declare prod_key: CreationOptional<string>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare password: string;

  @Attribute(DataTypes.STRING)
  declare address: CreationOptional<string>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @IsEmail()
  declare company_email: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @IsEmail()
  @PrimaryKey
  declare email: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare mobile_no: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(false)
  declare verified: CreationOptional<boolean>;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(false)
  declare prod_verified: CreationOptional<boolean>;

  @Attribute(DataTypes.INTEGER)
  declare otp: number | null;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  @Default(4)
  declare role: CreationOptional<number>;

  @DeletedAt
  @ColumnName("deletedAt")
  declare deleted_at: CreationOptional<Date>;

  @CreatedAt
  @ColumnName("createdAt")
  declare created_at: CreationOptional<Date>;

  @UpdatedAt
  @ColumnName("updatedAt")
  declare updated_at: CreationOptional<Date>;
}
