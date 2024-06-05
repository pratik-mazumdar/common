import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class Locations extends Model<InferAttributes<Locations>, InferCreationAttributes<Locations>> {
    id: CreationOptional<string>;
    city: number;
    provider_id: string;
    label: CreationOptional<boolean>;
    days: CreationOptional<Array<number>>;
    start: string;
    end: string;
    gps: string;
    radius: CreationOptional<number>;
    address: Record<any, any>;
    deleted_at: Date | null;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
}
