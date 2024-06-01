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
exports.Providers = void 0;
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
class Providers extends core_1.Model {
}
exports.Providers = Providers;
__decorate([
    decorators_legacy_1.DeletedAt,
    (0, decorators_legacy_1.ColumnName)("deleted_at"),
    __metadata("design:type", Object)
], Providers.prototype, "deletedAt", void 0);
__decorate([
    decorators_legacy_1.CreatedAt,
    (0, decorators_legacy_1.ColumnName)("createdAt"),
    __metadata("design:type", Object)
], Providers.prototype, "created_at", void 0);
__decorate([
    decorators_legacy_1.UpdatedAt,
    (0, decorators_legacy_1.ColumnName)("updatedAt"),
    __metadata("design:type", Object)
], Providers.prototype, "updated_at", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    decorators_legacy_1.PrimaryKey,
    __metadata("design:type", String)
], Providers.prototype, "id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Providers.prototype, "bpp_id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.BOOLEAN),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.Default)(true),
    __metadata("design:type", Object)
], Providers.prototype, "label", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Providers.prototype, "name", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.JSONB),
    decorators_legacy_1.NotNull,
    __metadata("design:type", Object)
], Providers.prototype, "descriptor", void 0);
