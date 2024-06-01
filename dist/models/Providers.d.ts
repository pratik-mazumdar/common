import { Model, InferAttributes, InferCreationAttributes } from "@sequelize/core";
export declare class Providers extends Model<InferAttributes<Providers>, InferCreationAttributes<Providers>> {
    deleted_at: Date | null;
    created_at: any;
    updated_at: any;
    id: string;
    bpp_id: string;
    label: boolean;
    name: string;
    descriptor: Record<any, any>;
}
