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
exports.SocialMedia = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const recipient_social_model_1 = require("../../recipient-social/models/recipient-social.model");
const recipient_model_1 = require("../../recipient/models/recipient.model");
let SocialMedia = class SocialMedia extends sequelize_typescript_1.Model {
    recipientSocial;
    recipient;
};
exports.SocialMedia = SocialMedia;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], SocialMedia.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], SocialMedia.prototype, "social_media", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], SocialMedia.prototype, "icon_url", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => recipient_social_model_1.RecipientSocial),
    __metadata("design:type", Array)
], SocialMedia.prototype, "recipientSocial", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => recipient_model_1.Recipient, () => recipient_social_model_1.RecipientSocial),
    __metadata("design:type", recipient_model_1.Recipient)
], SocialMedia.prototype, "recipient", void 0);
exports.SocialMedia = SocialMedia = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'social_media', timestamps: false })
], SocialMedia);
//# sourceMappingURL=social-media.model.js.map