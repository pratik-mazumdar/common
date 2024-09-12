import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class Companies extends Model<InferAttributes<Companies>, InferCreationAttributes<Companies>> {
    email: string;
    name: string;
    pan: CreationOptional<string>;
    verified: CreationOptional<boolean>;
    gstin: CreationOptional<number>;
}
