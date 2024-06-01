import { Model, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute } from "@sequelize/core";
import { Providers } from "./Providers";
export declare class Locations extends Model<InferAttributes<Locations>, InferCreationAttributes<Locations>> {
    deletedAt: Date | null;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
    id: string;
    provider_id: NonAttribute<Providers[]>;
    label: CreationOptional<boolean>;
    days: CreationOptional<Array<number>>;
    start: string;
    end: string;
    gps: string;
    radius: CreationOptional<number>;
    address: Record<any, any>;
}
