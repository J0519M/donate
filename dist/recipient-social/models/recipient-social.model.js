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
exports.RecipientSocial = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const recipient_model_1 = require("../../recipient/models/recipient.model");
const social_media_model_1 = require("../../social-media/models/social-media.model");
let RecipientSocial = class RecipientSocial extends sequelize_typescript_1.Model {
    recipient;
    socialMedia;
};
exports.RecipientSocial = RecipientSocial;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], RecipientSocial.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => recipient_model_1.Recipient),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], RecipientSocial.prototype, "recipient_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => social_media_model_1.SocialMedia),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], RecipientSocial.prototype, "social_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], RecipientSocial.prototype, "social_url", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => recipient_model_1.Recipient),
    __metadata("design:type", recipient_model_1.Recipient)
], RecipientSocial.prototype, "recipient", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => social_media_model_1.SocialMedia),
    __metadata("design:type", social_media_model_1.SocialMedia)
], RecipientSocial.prototype, "socialMedia", void 0);
exports.RecipientSocial = RecipientSocial = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'recipient_socials', timestamps: false })
], RecipientSocial);
//# sourceMappingURL=recipient-social.model.js.map