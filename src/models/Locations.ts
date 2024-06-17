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
  Table,
} from "@sequelize/core/decorators-legacy";

@Table({ timestamps: false })
export class Locations extends Model<
  InferAttributes<Locations>,
  InferCreationAttributes<Locations>
> {
  @Attribute(DataTypes.STRING)
  @NotNull
  @PrimaryKey
  declare id: CreationOptional<string>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare city: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @ColumnName("providerId")
  declare provider_id: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(true)
  declare label: CreationOptional<boolean>;

  @Attribute(DataTypes.ARRAY(DataTypes.INTEGER))
  @Default([1, 2, 3, 4, 5, 6, 7])
  declare days: CreationOptional<number>;

  @Attribute(DataTypes.SMALLINT)
  @NotNull
  declare start: number;

  @Attribute(DataTypes.SMALLINT)
  @NotNull
  declare end: number;

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

  @DeletedAt
  @ColumnName("deletedAt")
  declare deleted_at: Date | null;

  @CreatedAt
  @ColumnName("createdAt")
  declare created_at: CreationOptional<Date>;

  @UpdatedAt
  @ColumnName("updatedAt")
  declare updated_at: CreationOptional<Date>;
}
