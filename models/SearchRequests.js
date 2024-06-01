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
exports.SearchRequests = void 0;
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
class SearchRequests extends core_1.Model {
}
exports.SearchRequests = SearchRequests;
__decorate([
    decorators_legacy_1.DeletedAt,
    __metadata("design:type", Object)
], SearchRequests.prototype, "deleted_at", void 0);
__decorate([
    decorators_legacy_1.CreatedAt,
    __metadata("design:type", Object)
], SearchRequests.prototype, "created_at", void 0);
__decorate([
    decorators_legacy_1.UpdatedAt,
    __metadata("design:type", Object)
], SearchRequests.prototype, "updated_at", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.BIGINT),
    decorators_legacy_1.NotNull,
    decorators_legacy_1.PrimaryKey,
    decorators_legacy_1.AutoIncrement,
    __metadata("design:type", Object)
], SearchRequests.prototype, "id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.Unique,
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], SearchRequests.prototype, "transaction_id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.Unique,
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], SearchRequests.prototype, "message_id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], SearchRequests.prototype, "domain", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], SearchRequests.prototype, "bap_id", void 0);
// import { DataTypes, ModelStatic } from "sequelize";
// export const SearchRequests: ModelStatic<any> = sequelize.define(
//   "SearchRequests",
//   {
//     id: {
//       type: DataTypes.BIGINT,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     transaction_id: {
//       unique: true,
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     message_id: {
//       unique: true,
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     domain: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     bap_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   { timestamps: true, paranoid: true }
// );
