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
exports.Companies = void 0;
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
const validator_js_1 = require("@sequelize/validator.js");
class Companies extends core_1.Model {
}
exports.Companies = Companies;
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.PrimaryKey,
    decorators_legacy_1.Unique,
    validator_js_1.IsEmail,
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Companies.prototype, "email", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Companies.prototype, "name", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Companies.prototype, "pan", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.BOOLEAN),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.Default)(false),
    __metadata("design:type", Object)
], Companies.prototype, "verified", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", Number)
], Companies.prototype, "gstin", void 0);
