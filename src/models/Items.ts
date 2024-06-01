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

export class Items extends Model<
  InferAttributes<Items>,
  InferCreationAttributes<Items>
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
  declare id: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare provider_id: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare location_id: string;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(true)
  declare label: CreationOptional<boolean>;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(false)
  declare stock: CreationOptional<boolean>;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(false)
  declare returnable: CreationOptional<boolean>;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(false)
  declare cancellable: CreationOptional<boolean>;

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

  @Attribute(DataTypes.DECIMAL(20, 2))
  @NotNull
  declare price: number;

  @Attribute(DataTypes.SMALLINT)
  @NotNull
  declare maximum_per_order: number;
}
