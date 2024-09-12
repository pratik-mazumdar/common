/// <reference types="node" />
import { UUID } from "node:crypto";
import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "@sequelize/core";
export declare class Analytics extends Model<InferAttributes<Analytics>, InferCreationAttributes<Analytics>> {
    id: CreationOptional<UUID>;
    user_email: CreationOptional<string>;
    search_count: number;
}
