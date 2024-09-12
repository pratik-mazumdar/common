import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "@sequelize/core";
import {
  Attribute,
  Default,
  NotNull,
  PrimaryKey,
  Unique,
} from "@sequelize/core/decorators-legacy";
import { IsEmail } from "@sequelize/validator.js";

export class Companies extends Model<
  InferAttributes<Companies>,
  InferCreationAttributes<Companies>
> {
  @Attribute(DataTypes.STRING)
  @PrimaryKey
  @Unique
  @IsEmail
  @NotNull
  declare email: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;

  @Attribute(DataTypes.STRING)
  declare pan: CreationOptional<string>;

  @Attribute(DataTypes.BOOLEAN)
  @Default(false)
  declare verified: CreationOptional<boolean>;

  @Attribute(DataTypes.STRING)
  declare gstin: CreationOptional<number>;
}
