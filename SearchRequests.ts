import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "@sequelize/core";
import {
  Attribute,
  DeletedAt,
  CreatedAt,
  UpdatedAt,
  NotNull,
  Table,
  Unique,
} from "@sequelize/core/decorators-legacy";

@Table
export class Locations extends Model<
  InferAttributes<Locations>,
  InferCreationAttributes<Locations>
> {
  @DeletedAt
  declare deleted_at: Date | null;
  @CreatedAt
  declare created_at: any;
  @UpdatedAt
  declare updated_at: any;

  @Attribute(DataTypes.STRING)
  @Unique
  @NotNull
  declare transaction_id: string;

  @Attribute(DataTypes.STRING)
  @Unique
  @NotNull
  declare message_id: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare domain: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare bap_id: string;
}

// import { DataTypes, ModelStatic } from "sequelize";

// export const SearchRequests: ModelStatic<any> = sequelize.define(
//   "SearchRequests",
//   {
//     id: {
//       type: DataTypes.BIGINT,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     transaction_id: {
//       unique: true,
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     message_id: {
//       unique: true,
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     domain: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     bap_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   { timestamps: true, paranoid: true }
// );
