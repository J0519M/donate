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
exports.SocialMediaService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const social_media_model_1 = require("./models/social-media.model");
let SocialMediaService = class SocialMediaService {
    socialMediaModel;
    constructor(socialMediaModel) {
        this.socialMediaModel = socialMediaModel;
    }
    async create(createSocialMediaDto) {
        const { social_media, icon_url } = createSocialMediaDto;
        if (!social_media || !icon_url) {
            throw new common_1.BadRequestException('Iltimos barchasini kiriting');
        }
        const existsSocial = await this.socialMediaModel.findOne({
            where: { social_media },
        });
        if (existsSocial) {
            throw new common_1.BadRequestException('Bunday social media mavjud');
        }
        return this.socialMediaModel.create(createSocialMediaDto);
    }
    findAll() {
        return this.socialMediaModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const social = await this.socialMediaModel.findByPk(id, {
            include: { all: true },
        });
        if (!social) {
            throw new common_1.NotFoundException('Social media topilmadi');
        }
        return social;
    }
    async update(id, updateSocialMediaDto) {
        const { social_media, icon_url } = updateSocialMediaDto;
        const social = await this.socialMediaModel.findByPk(id);
        if (!social) {
            throw new common_1.NotFoundException('Social media topilmadi');
        }
        if (social_media) {
            const existsSocial = await this.socialMediaModel.findOne({
                where: { social_media },
            });
            if (existsSocial && existsSocial.id !== id) {
                throw new common_1.BadRequestException('Bunday social media mavjud');
            }
        }
        const updated = await this.socialMediaModel.update(updateSocialMediaDto, {
            where: { id },
            returning: true,
        });
        return updated[1][0];
    }
    async remove(id) {
        const deleted = await this.socialMediaModel.destroy({ where: { id } });
        if (!deleted) {
            return { message: 'Bunday social media mavjud emas' };
        }
        return { message: "Social media o'chirildi", id };
    }
};
exports.SocialMediaService = SocialMediaService;
exports.SocialMediaService = SocialMediaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(social_media_model_1.SocialMedia)),
    __metadata("design:paramtypes", [Object])
], SocialMediaService);
//# sourceMappingURL=social-media.service.js.map