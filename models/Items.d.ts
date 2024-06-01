import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "@sequelize/core";
export declare class Items extends Model<InferAttributes<Items>, InferCreationAttributes<Items>> {
    deletedAt: Date | null;
    created_at: CreationOptional<Date>;
    updated_at: CreationOptional<Date>;
    id: string;
    provider_id: string;
    location_id: string;
    label: CreationOptional<boolean>;
    stock: CreationOptional<boolean>;
    returnable: CreationOptional<boolean>;
    cancellable: CreationOptional<boolean>;
    descriptor: Record<any, any>;
    statutory_reqs_packaged_commodities: Record<any, any>;
    statutory_reqs_prepackaged_food: Record<any, any>;
    category: Record<any, any>;
    name: string;
    category_id: string;
    time_to_ship: string;
    customer_care: string;
    return_window: string;
    price: number;
    maximum_per_order: number;
}
