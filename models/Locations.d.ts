import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class Locations extends Model<InferAttributes<Locations>, InferCreationAttributes<Locations>> {
    id: CreationOptional<string>;
    city: string;
    provider_id: string;
    label: CreationOptional<boolean>;
    days: CreationOptional<Uint16Array>;
    start: number;
    end: number;
    gps: string;
    radius: CreationOptional<number>;
    address: Record<any, any>;
    deleted_at: Date | null;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
}
