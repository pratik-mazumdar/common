import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "@sequelize/core";
import {
  Attribute,
  DeletedAt,
  CreatedAt,
  UpdatedAt,
  NotNull,
  Unique,
  PrimaryKey,
  AutoIncrement,
  ColumnName,
} from "@sequelize/core/decorators-legacy";

export class SearchRequests extends Model<
  InferAttributes<SearchRequests>,
  InferCreationAttributes<SearchRequests>
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

  @Attribute(DataTypes.BIGINT)
  @NotNull
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @Unique
  @NotNull
  declare transaction_id: string;

  @Attribute(DataTypes.STRING)
  @Unique
  @NotNull
  declare message_id: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare domain: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare bap_id: string;
}
