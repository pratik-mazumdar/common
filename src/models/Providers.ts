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
  DeletedAt,
  CreatedAt,
  UpdatedAt,
  NotNull,
  PrimaryKey,
  ColumnName,
} from "@sequelize/core/decorators-legacy";

export class Providers extends Model<
  InferAttributes<Providers>,
  InferCreationAttributes<Providers>
> {
  @DeletedAt
  @ColumnName("deleted_at")
  declare deletedAt: Date | null;

  @CreatedAt
  @ColumnName("createdAt")
  declare created_at: CreationOptional<Date>;

  @UpdatedAt
  @ColumnName("updatedAt")
  declare updated_at: CreationOptional<Date>;

  // This is the combination of provider_id and bpp_id
  @Attribute(DataTypes.STRING)
  @NotNull
  @PrimaryKey
  declare id: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare bpp_id: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(true)
  declare label: CreationOptional<boolean>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;

  @Attribute(DataTypes.JSONB)
  @NotNull
  declare descriptor: Record<any, any>;
}

// import { DataTypes, ModelStatic } from "sequelize";
// import sequelize from "./_sequelize";
// import { Locations } from "./Locations";
// import { Items } from "./Items";

// export const Providers: ModelStatic<any> = sequelize.define(
//   "Providers",
//   {
//     id: {
//       // This is the combination of provider_id and bpp_id
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true,
//     },
//     bpp_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     label: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     descriptor: {
//       type: DataTypes.JSONB,
//       allowNull: false,
//     },
//   },
//   { timestamps: true, paranoid: true }
// );

// Providers.hasMany(Locations, { foreignKey: "provider_id" });
// Providers.hasMany(Items, { foreignKey: "provider_id" });
