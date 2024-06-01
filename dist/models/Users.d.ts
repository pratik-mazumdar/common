/// <reference types="node" />
import { Model, InferAttributes, InferCreationAttributes } from "@sequelize/core";
import { SmallIntegerDataType } from "sequelize/lib/data-types";
import { UUID } from "node:crypto";
export declare class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    deletedAt: Date | null;
    createdAt: any;
    updatedAt: any;
    dev_key: string;
    prod_key: string;
    password: string;
    display: boolean;
    id: UUID;
    email: string;
    select_service: string;
    mobile_no: string;
    verified: boolean;
    otp: number | null;
    role: SmallIntegerDataType;
}
