import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    dev_key: CreationOptional<string>;
    prod_key: CreationOptional<string>;
    password: string;
    address: CreationOptional<string>;
    name: string;
    company_email: string;
    email: string;
    mobile_no: string;
    verified: CreationOptional<boolean>;
    prod_verified: CreationOptional<boolean>;
    otp: number | null;
    role: CreationOptional<number>;
    deleted_at: CreationOptional<Date>;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
}
