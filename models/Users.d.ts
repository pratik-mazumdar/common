/// <reference types="node" />
import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
import { SmallIntegerDataType } from "sequelize/lib/data-types";
import { UUID } from "node:crypto";
export declare class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    dev_key: string;
    prod_key: string;
    password: string;
    display: CreationOptional<boolean>;
    id: CreationOptional<UUID>;
    email: string;
    select_service: string;
    mobile_no: string;
    verified: CreationOptional<boolean>;
    otp: number | null;
    role: CreationOptional<SmallIntegerDataType>;
    deleted_at: Date | null;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
}
