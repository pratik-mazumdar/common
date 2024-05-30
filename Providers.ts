import { DataTypes, ModelStatic } from "sequelize";
import sequelize from "./_sequelize";
import { Locations } from "./Locations";
import { Items } from "./Items";

export const Providers: ModelStatic<any> = sequelize.define(
  "Providers",
  {
    id: {
      // This is the combination of provider_id and bpp_id
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    bpp_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    label: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descriptor: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  { timestamps: true, paranoid: true }
);

Providers.hasMany(Locations, { foreignKey: "provider_id" });
Providers.hasMany(Items, { foreignKey: "provider_id" });
