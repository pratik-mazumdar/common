import { DataTypes, ModelStatic } from "sequelize";
import sequelize from "./_sequelize";

export const Items: ModelStatic<any> = sequelize.define("Items", {
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
  location_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Locations", // This should match the actual table name of the Location model
      key: "id",
    },
  },
  label: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  descriptor: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(20, 2).ZEROFILL,
    allowNull: false,
  },
  stock: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  maximum_per_order: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categories: {
    type: DataTypes.JSONB,
  },
  returnable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  cancellable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  return_window: {
    type: DataTypes.STRING,
  },
  time_to_ship: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customer_care: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  statutory_reqs_packaged_commodities: {
    type: DataTypes.JSONB,
  },
  statutory_reqs_prepackaged_food: {
    type: DataTypes.JSONB,
  },
});
