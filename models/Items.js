"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
class Items extends core_1.Model {
}
exports.Items = Items;
__decorate([
    decorators_legacy_1.DeletedAt,
    (0, decorators_legacy_1.ColumnName)("deletedAt"),
    __metadata("design:type", Object)
], Items.prototype, "deleted_at", void 0);
__decorate([
    decorators_legacy_1.CreatedAt,
    (0, decorators_legacy_1.ColumnName)("createdAt"),
    __metadata("design:type", Object)
], Items.prototype, "created_at", void 0);
__decorate([
    decorators_legacy_1.UpdatedAt,
    (0, decorators_legacy_1.ColumnName)("updatedAt"),
    __metadata("design:type", Object)
], Items.prototype, "updated_at", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    decorators_legacy_1.PrimaryKey,
    __metadata("design:type", String)
], Items.prototype, "id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Items.prototype, "provider_id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Items.prototype, "location_id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.BOOLEAN),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.Default)(true),
    __metadata("design:type", Object)
], Items.prototype, "label", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.BOOLEAN),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.Default)(false),
    __metadata("design:type", Object)
], Items.prototype, "stock", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.BOOLEAN),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.Default)(false),
    __metadata("design:type", Object)
], Items.prototype, "returnable", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.BOOLEAN),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.Default)(false),
    __metadata("design:type", Object)
], Items.prototype, "cancellable", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.JSONB),
    decorators_legacy_1.NotNull,
    __metadata("design:type", Object)
], Items.prototype, "descriptor", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.JSONB),
    __metadata("design:type", Object)
], Items.prototype, "statutory_reqs_packaged_commodities", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.JSONB),
    __metadata("design:type", Object)
], Items.prototype, "statutory_reqs_prepackaged_food", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.JSONB),
    __metadata("design:type", Object)
], Items.prototype, "category", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Items.prototype, "name", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Items.prototype, "category_id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Items.prototype, "time_to_ship", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Items.prototype, "customer_care", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    __metadata("design:type", String)
], Items.prototype, "return_window", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.DECIMAL(20, 2)),
    decorators_legacy_1.NotNull,
    __metadata("design:type", Number)
], Items.prototype, "price", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.SMALLINT),
    decorators_legacy_1.NotNull,
    __metadata("design:type", Number)
], Items.prototype, "maximum_per_order", void 0);
