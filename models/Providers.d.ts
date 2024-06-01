import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class Providers extends Model<InferAttributes<Providers>, InferCreationAttributes<Providers>> {
    deletedAt: Date | null;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
    id: string;
    bpp_id: string;
    label: CreationOptional<boolean>;
    name: string;
    descriptor: Record<any, any>;
}
