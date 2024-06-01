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
  HasMany,
  ColumnName,
} from "@sequelize/core/decorators-legacy";
import { Providers } from "./Providers";

export class Locations extends Model<
  InferAttributes<Locations>,
  InferCreationAttributes<Locations>
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

  @Attribute(DataTypes.STRING)
  @NotNull
  @PrimaryKey
  declare id: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @HasMany(() => Providers, "id")
  @ColumnName("providerId")
  declare provider_id: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(true)
  declare label: CreationOptional<boolean>;

  @Attribute(DataTypes.ARRAY(DataTypes.SMALLINT))
  @Default([1, 2, 3, 4, 5, 6, 7])
  declare days: CreationOptional<Array<number>>;

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
  declare radius: CreationOptional<number>;

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
