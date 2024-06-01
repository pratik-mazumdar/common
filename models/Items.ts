import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "@sequelize/core";
import {
  Attribute,
  Default,
  DeletedAt,
  CreatedAt,
  UpdatedAt,
  NotNull,
  PrimaryKey,
  Table,
  HasMany,
  HasOne,
} from "@sequelize/core/decorators-legacy";
import { Locations } from "Locations";
import { Providers } from "Providers";

@Table({ noPrimaryKey: true })
export class Items extends Model<
  InferAttributes<Items>,
  InferCreationAttributes<Items>
> {
  @DeletedAt
  declare deleted_at: Date | null;
  @CreatedAt
  declare created_at: any;
  @UpdatedAt
  declare updated_at: any;

  @Attribute(DataTypes.STRING)
  @NotNull
  @PrimaryKey
  declare id: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @HasMany(() => Providers, "id")
  declare provider_id: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @HasOne(() => Locations, "id")
  declare location_id: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(true)
  declare label: boolean;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(false)
  declare stock: boolean;

  @Attribute(DataTypes.BOOLEAN)
  @Default(false)
  declare returnable: boolean;

  @Attribute(DataTypes.BOOLEAN)
  @Default(false)
  declare cancellable: boolean;

  @Attribute(DataTypes.JSONB)
  @NotNull
  declare descriptor: Record<any, any>;

  @Attribute(DataTypes.JSONB)
  declare statutory_reqs_packaged_commodities: Record<any, any>;

  @Attribute(DataTypes.JSONB)
  declare statutory_reqs_prepackaged_food: Record<any, any>;

  @Attribute(DataTypes.JSONB)
  declare category: Record<any, any>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare category_id: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare time_to_ship: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare customer_care: string;

  @Attribute(DataTypes.STRING)
  declare return_window: string;

  @Attribute(DataTypes.DECIMAL(20, 2).ZEROFILL)
  @NotNull
  declare price: number;

  @Attribute(DataTypes.SMALLINT)
  @NotNull
  declare maximum_per_order: number;
}

// import { DataTypes, ModelStatic } from "sequelize";
// import sequelize from "./_sequelize";

// export const Items: ModelStatic<any> = sequelize.define("Items", {
//   id: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     primaryKey: true,
//   },
//   provider_id: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     references: {
//       model: "Providers", // This should match the actual table name of the Providers model
//       key: "id",
//     },
//   },
//   location_id: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     references: {
//       model: "Locations", // This should match the actual table name of the Location model
//       key: "id",
//     },
//   },
//   label: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: true,
//     allowNull: false,
//   },
//   descriptor: {
//     type: DataTypes.JSONB,
//     allowNull: false,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   price: {
//     type: DataTypes.DECIMAL(20, 2).ZEROFILL,
//     allowNull: false,
//   },
//   stock: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//   },
//   maximum_per_order: {
//     type: DataTypes.SMALLINT,
//     allowNull: false,
//   },
//   category_id: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   categories: {
//     type: DataTypes.JSONB,
//   },
//   returnable: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//   },
//   cancellable: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//   },
//   return_window: {
//     type: DataTypes.STRING,
//   },
//   time_to_ship: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   customer_care: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   statutory_reqs_packaged_commodities: {
//     type: DataTypes.JSONB,
//   },
//   statutory_reqs_prepackaged_food: {
//     type: DataTypes.JSONB,
//   },
// });
