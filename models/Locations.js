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
exports.Locations = void 0;
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
const Providers_1 = require("./Providers");
class Locations extends core_1.Model {
}
exports.Locations = Locations;
__decorate([
    decorators_legacy_1.DeletedAt,
    (0, decorators_legacy_1.ColumnName)("deleted_at"),
    __metadata("design:type", Object)
], Locations.prototype, "deletedAt", void 0);
__decorate([
    decorators_legacy_1.CreatedAt,
    (0, decorators_legacy_1.ColumnName)("createdAt"),
    __metadata("design:type", Object)
], Locations.prototype, "created_at", void 0);
__decorate([
    decorators_legacy_1.UpdatedAt,
    (0, decorators_legacy_1.ColumnName)("updatedAt"),
    __metadata("design:type", Object)
], Locations.prototype, "updated_at", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    decorators_legacy_1.PrimaryKey,
    __metadata("design:type", String)
], Locations.prototype, "id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.HasMany)(() => Providers_1.Providers, "id"),
    (0, decorators_legacy_1.ColumnName)("providerId"),
    __metadata("design:type", String)
], Locations.prototype, "provider_id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.BOOLEAN),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.Default)(true),
    __metadata("design:type", Object)
], Locations.prototype, "label", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.ARRAY(core_1.DataTypes.SMALLINT)),
    (0, decorators_legacy_1.Default)([1, 2, 3, 4, 5, 6, 7]),
    __metadata("design:type", Object)
], Locations.prototype, "days", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Locations.prototype, "start", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Locations.prototype, "end", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Locations.prototype, "gps", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.INTEGER),
    decorators_legacy_1.NotNull,
    (0, decorators_legacy_1.Default)(0),
    __metadata("design:type", Object)
], Locations.prototype, "radius", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.JSONB),
    decorators_legacy_1.NotNull,
    __metadata("design:type", Object)
], Locations.prototype, "address", void 0);
// export const Locations: ModelStatic<any> = sequelize.define(
//   "Locations",
//   {
//     id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true,
//     },
//     provider_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       references: {
//         model: "Providers", // This should match the actual table name of the Providers model
//         key: "id",
//       },
//     },
//     label: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//       allowNull: false,
//     },
//     days: {
//       type: DataTypes.ARRAY(DataTypes.SMALLINT),
//       defaultValue: [1, 2, 3, 4, 5, 6, 7],
//     },
//     start: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     end: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     gps: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     address: {
//       type: DataTypes.JSONB,
//       allowNull: false,
//     },
//     // Radius is in KM
//     radius: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 0,
//     },
//   },
//   { timestamps: true, paranoid: true }
// );
// Locations.hasOne(Items, { foreignKey: "location_id" });
