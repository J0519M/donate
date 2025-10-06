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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipientSocialService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const recipient_social_model_1 = require("./models/recipient-social.model");
const social_media_model_1 = require("../social-media/models/social-media.model");
const recipient_model_1 = require("../recipient/models/recipient.model");
let RecipientSocialService = class RecipientSocialService {
    recipientSocialModel;
    socialMediaModel;
    recipientModel;
    constructor(recipientSocialModel, socialMediaModel, recipientModel) {
        this.recipientSocialModel = recipientSocialModel;
        this.socialMediaModel = socialMediaModel;
        this.recipientModel = recipientModel;
    }
    async create(CreateRecipientSocialDto) {
        const { recipient_id, social_id } = CreateRecipientSocialDto;
        if (!recipient_id || !social_id) {
            throw new common_1.NotFoundException('Barchasini kiriting');
        }
        const recipientModel = await this.recipientModel.findByPk(recipient_id);
        if (!recipientModel) {
            throw new common_1.NotFoundException('Bunday recipient mavjud emas');
        }
        const socialMediaModel = await this.socialMediaModel.findByPk(social_id);
        if (!socialMediaModel) {
            throw new common_1.NotFoundException('bunday socialMedia mavjud emas');
        }
        return this.recipientSocialModel.create(CreateRecipientSocialDto);
    }
    findAll() {
        return this.recipientSocialModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const recipientSocial = await this.recipientSocialModel.findByPk(id, {
            include: { all: true },
        });
        if (!recipientSocial) {
            throw new common_1.NotFoundException('RecipientSocial not found');
        }
        return recipientSocial;
    }
    async update(id, UpdateRecipientSocialDto) {
        const recipientSocial = await this.recipientSocialModel.findByPk(id);
        if (!recipientSocial) {
            throw new common_1.NotFoundException('RecipientSocial not found');
        }
        const recipient_social = await this.recipientSocialModel.update(UpdateRecipientSocialDto, { where: { id }, returning: true });
        return recipient_social[1][0];
    }
    async remove(id) {
        const recipientSocial = await this.recipientSocialModel.destroy({
            where: { id },
        });
        if (!recipientSocial) {
            return { message: 'Bunday RecipientSocial mavjud emas' };
        }
        return { message: "RecipientSocial o'chirildi", id };
    }
};
exports.RecipientSocialService = RecipientSocialService;
exports.RecipientSocialService = RecipientSocialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(recipient_social_model_1.RecipientSocial)),
    __param(1, (0, sequelize_1.InjectModel)(social_media_model_1.SocialMedia)),
    __param(2, (0, sequelize_1.InjectModel)(recipient_model_1.Recipient)),
    __metadata("design:paramtypes", [Object, Object, Object])
], RecipientSocialService);
//# sourceMappingURL=recipient-social.service.js.map