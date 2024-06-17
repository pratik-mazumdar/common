/// <reference types="node" />
import { UUID } from "node:crypto";
import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "@sequelize/core";
export declare class Analytics extends Model<InferAttributes<Analytics>, InferCreationAttributes<Analytics>> {
    id: CreationOptional<UUID>;
    user_id: CreationOptional<UUID>;
    deleted_at: Date | null;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
}
