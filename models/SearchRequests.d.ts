import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class SearchRequests extends Model<InferAttributes<SearchRequests>, InferCreationAttributes<SearchRequests>> {
    deleted_at: Date | null;
    created_at: any;
    updated_at: any;
    id: CreationOptional<number>;
    transaction_id: string;
    message_id: string;
    domain: string;
    bap_id: string;
}
