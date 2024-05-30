import { DataTypes, ModelStatic } from "sequelize";
import sequelize from "./_sequelize";
import { Items } from "./Items";

export const Locations: ModelStatic<any> = sequelize.define(
  "Locations",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    provider_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Providers", // This should match the actual table name of the Providers model
        key: "id",
      },
    },
    label: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    days: {
      type: DataTypes.ARRAY(DataTypes.SMALLINT),
      defaultValue: [1, 2, 3, 4, 5, 6, 7],
    },
    start: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    // Radius is in KM
    radius: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  { timestamps: true, paranoid: true }
);

Locations.hasOne(Items, { foreignKey: "location_id" });
