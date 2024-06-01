import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class SearchRequests extends Model<InferAttributes<SearchRequests>, InferCreationAttributes<SearchRequests>> {
    deletedAt: Date | null;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
    id: CreationOptional<number>;
    transaction_id: string;
    message_id: string;
    domain: string;
    bap_id: string;
}
