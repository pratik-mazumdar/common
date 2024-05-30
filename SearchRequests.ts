import { DataTypes, ModelStatic } from "sequelize";
import sequelize from "./_sequelize";

export const SearchRequests: ModelStatic<any> = sequelize.define(
  "SearchRequests",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    transaction_id: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    message_id: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: true,
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bap_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, paranoid: true }
);
