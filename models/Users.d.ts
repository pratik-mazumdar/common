import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    dev_key: string;
    prod_key: string;
    password: string;
    address: string;
    name: string;
    company_email: string;
    email: string;
    mobile_no: string;
    verified: CreationOptional<boolean>;
    prod_verified: CreationOptional<boolean>;
    otp: number | null;
    role: CreationOptional<number>;
    deleted_at: Date | null;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
}
