import { Model, InferAttributes, InferCreationAttributes } from "@sequelize/core";
export declare class Locations extends Model<InferAttributes<Locations>, InferCreationAttributes<Locations>> {
    deleted_at: Date | null;
    created_at: any;
    updated_at: any;
    id: string;
    provider_id: string;
    label: boolean;
    days: Array<number>;
    start: string;
    end: string;
    gps: string;
    radius: number;
    address: Record<any, any>;
}
