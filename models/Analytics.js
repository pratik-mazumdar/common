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
exports.Analytics = void 0;
const node_crypto_1 = require("node:crypto");
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
class Analytics extends core_1.Model {
}
exports.Analytics = Analytics;
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.UUID),
    decorators_legacy_1.NotNull,
    decorators_legacy_1.PrimaryKey,
    (0, decorators_legacy_1.Default)((0, node_crypto_1.randomUUID)()),
    __metadata("design:type", Object)
], Analytics.prototype, "id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.UUID),
    decorators_legacy_1.NotNull,
    __metadata("design:type", Object)
], Analytics.prototype, "user_id", void 0);
