import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class Companies extends Model<InferAttributes<Companies>, InferCreationAttributes<Companies>> {
    email: string;
    name: string;
    pan: string;
    verified: CreationOptional<boolean>;
    gstin: number;
}
