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
exports.User = void 0;
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
const validator_js_1 = require("@sequelize/validator.js");
class User extends core_1.Model {
}
exports.User = User;
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.TEXT),
    __metadata("design:type", String)
], User.prototype, "dev_key", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.TEXT),
    __metadata("design:type", String)
], User.prototype, "prod_key", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.BOOLEAN),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.Default)(false),
    __metadata("design:type", Object)
], User.prototype, "display", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.UUID),
    decorators_legacy_1.NotNull,
    decorators_legacy_1.Unique,
    (0, decorators_legacy_1.Default)(core_1.sql.uuidV4),
    __metadata("design:type", Object)
], User.prototype, "id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    validator_js_1.IsEmail,
    decorators_legacy_1.PrimaryKey,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    (0, validator_js_1.IsIn)(["BUYER:10"]),
    __metadata("design:type", String)
], User.prototype, "select_service", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], User.prototype, "mobile_no", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.BOOLEAN),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.Default)(false),
    __metadata("design:type", Object)
], User.prototype, "verified", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.INTEGER),
    __metadata("design:type", Object)
], User.prototype, "otp", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.SMALLINT),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.Default)(4),
    __metadata("design:type", Object)
], User.prototype, "role", void 0);
__decorate([
    decorators_legacy_1.DeletedAt,
    (0, decorators_legacy_1.ColumnName)("deletedAt"),
    __metadata("design:type", Object)
], User.prototype, "deleted_at", void 0);
__decorate([
    decorators_legacy_1.CreatedAt,
    (0, decorators_legacy_1.ColumnName)("createdAt"),
    __metadata("design:type", Object)
], User.prototype, "created_at", void 0);
__decorate([
    decorators_legacy_1.UpdatedAt,
    (0, decorators_legacy_1.ColumnName)("updatedAt"),
    __metadata("design:type", Object)
], User.prototype, "updated_at", void 0);
User.addScope("defaultScope", {
    attributes: {
        exclude: ["password", "deleted_at", "updated_at", "created_at"],
    },
});
User.addScope("withTime", {
    attributes: { include: ["deleted_at", "updated_at", "created_at"] },
});
User.addScope("withTimePassword", {
    attributes: {
        include: ["password", "deleted_at", "updated_at", "created_at"],
    },
});
