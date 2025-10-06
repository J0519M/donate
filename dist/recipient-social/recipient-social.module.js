"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipientSocialModule = void 0;
const common_1 = require("@nestjs/common");
const recipient_social_service_1 = require("./recipient-social.service");
const recipient_social_controller_1 = require("./recipient-social.controller");
const sequelize_1 = require("@nestjs/sequelize");
const recipient_social_model_1 = require("./models/recipient-social.model");
const recipient_model_1 = require("../recipient/models/recipient.model");
const social_media_model_1 = require("../social-media/models/social-media.model");
let RecipientSocialModule = class RecipientSocialModule {
};
exports.RecipientSocialModule = RecipientSocialModule;
exports.RecipientSocialModule = RecipientSocialModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([recipient_social_model_1.RecipientSocial, recipient_model_1.Recipient, social_media_model_1.SocialMedia]),
        ],
        controllers: [recipient_social_controller_1.RecipientSocialController],
        providers: [recipient_social_service_1.RecipientSocialService],
    })
], RecipientSocialModule);
//# sourceMappingURL=recipient-social.module.js.map