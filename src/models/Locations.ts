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

export class Locations extends Model<
  InferAttributes<Locations>,
  InferCreationAttributes<Locations>
> {
  @DeletedAt
  @ColumnName("deletedAt")
  declare deleted_at: Date | null;

  @CreatedAt
  @ColumnName("createdAt")
  declare created_at: CreationOptional<Date>;

  @UpdatedAt
  @ColumnName("updatedAt")
  declare updated_at: CreationOptional<Date>;

  @Attribute(DataTypes.STRING)
  @NotNull
  @PrimaryKey
  declare id?: number;

  @Attribute(DataTypes.STRING)
  @NotNull
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
