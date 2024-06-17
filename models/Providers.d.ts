import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class Providers extends Model<InferAttributes<Providers>, InferCreationAttributes<Providers>> {
    id: string;
    bpp_id: string;
    bpp_uri: string;
    label: CreationOptional<boolean>;
    name: string;
    descriptor: Record<any, any>;
    deleted_at: Date | null;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
}
