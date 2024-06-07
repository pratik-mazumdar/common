import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
import { SMALLINT } from "@sequelize/core/_non-semver-use-at-your-own-risk_/abstract-dialect/data-types.js";
export declare class Locations extends Model<InferAttributes<Locations>, InferCreationAttributes<Locations>> {
    id: CreationOptional<string>;
    city: string;
    provider_id: string;
    label: CreationOptional<boolean>;
    days: CreationOptional<Array<SMALLINT>>;
    start: number;
    end: number;
    gps: string;
    radius: CreationOptional<number>;
    address: Record<any, any>;
    deleted_at: Date | null;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
}
