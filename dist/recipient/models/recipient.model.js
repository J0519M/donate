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
exports.Recipient = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const card_model_1 = require("../../cards/models/card.model");
const shop_model_1 = require("../../shop/model/shop.model");
const social_media_model_1 = require("../../social-media/models/social-media.model");
const recipient_social_model_1 = require("../../recipient-social/models/recipient-social.model");
const user_model_1 = require("../../user/models/user.model");
const donate_model_1 = require("../../donate/models/donate.model");
let Recipient = class Recipient extends sequelize_typescript_1.Model {
    name;
    full_name;
    email;
    password;
    address;
    cards;
    shop;
    socialMedia;
    users;
    donate;
};
exports.Recipient = Recipient;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Recipient.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), allowNull: false }),
    __metadata("design:type", String)
], Recipient.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), allowNull: false }),
    __metadata("design:type", String)
], Recipient.prototype, "full_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50), allowNull: false, unique: true }),
    __metadata("design:type", String)
], Recipient.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Recipient.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Recipient.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => card_model_1.Card),
    __metadata("design:type", Array)
], Recipient.prototype, "cards", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => shop_model_1.Shop),
    __metadata("design:type", Array)
], Recipient.prototype, "shop", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => social_media_model_1.SocialMedia, () => recipient_social_model_1.RecipientSocial),
    __metadata("design:type", social_media_model_1.SocialMedia)
], Recipient.prototype, "socialMedia", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => user_model_1.User, () => donate_model_1.Donate),
    __metadata("design:type", user_model_1.User)
], Recipient.prototype, "users", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => donate_model_1.Donate),
    __metadata("design:type", donate_model_1.Donate)
], Recipient.prototype, "donate", void 0);
exports.Recipient = Recipient = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'recipients' })
], Recipient);
//# sourceMappingURL=recipient.model.js.map