import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class SearchRequests extends Model<InferAttributes<SearchRequests>, InferCreationAttributes<SearchRequests>> {
    id: CreationOptional<number>;
    transaction_id: string;
    message_id: string;
    domain: string;
    bap_id: string;
    deleted_at: CreationOptional<Date>;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
}
