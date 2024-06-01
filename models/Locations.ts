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
  HasMany,
} from "@sequelize/core/decorators-legacy";
import { Providers } from "./Providers";

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
  @NotNull
  @PrimaryKey
  declare id: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @HasMany(() => Providers, "id")
  declare provider_id: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(true)
  declare label: boolean;

  @Attribute(DataTypes.ARRAY(DataTypes.SMALLINT))
  @Default([1, 2, 3, 4, 5, 6, 7])
  declare days: Array<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare start: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare end: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare gps: string;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  @Default(0)
  declare radius: number;

  @Attribute(DataTypes.JSONB)
  @NotNull
  declare address: Record<any, any>;
}

// export const Locations: ModelStatic<any> = sequelize.define(
//   "Locations",
//   {
//     id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true,
//     },
//     provider_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       references: {
//         model: "Providers", // This should match the actual table name of the Providers model
//         key: "id",
//       },
//     },
//     label: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//       allowNull: false,
//     },
//     days: {
//       type: DataTypes.ARRAY(DataTypes.SMALLINT),
//       defaultValue: [1, 2, 3, 4, 5, 6, 7],
//     },
//     start: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     end: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     gps: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     address: {
//       type: DataTypes.JSONB,
//       allowNull: false,
//     },
//     // Radius is in KM
//     radius: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 0,
//     },
//   },
//   { timestamps: true, paranoid: true }
// );

// Locations.hasOne(Items, { foreignKey: "location_id" });
