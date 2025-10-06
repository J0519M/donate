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
exports.SocialMediaController = void 0;
const common_1 = require("@nestjs/common");
const social_media_service_1 = require("./social-media.service");
const create_social_media_dto_1 = require("./dto/create-social-media.dto");
const update_social_media_dto_1 = require("./dto/update-social-media.dto");
const swagger_1 = require("@nestjs/swagger");
let SocialMediaController = class SocialMediaController {
    socialMediaService;
    constructor(socialMediaService) {
        this.socialMediaService = socialMediaService;
    }
    create(createSocialMediaDto) {
        return this.socialMediaService.create(createSocialMediaDto);
    }
    findAll() {
        return this.socialMediaService.findAll();
    }
    findOne(id) {
        return this.socialMediaService.findOne(+id);
    }
    update(id, updateSocialMediaDto) {
        return this.socialMediaService.update(+id, updateSocialMediaDto);
    }
    remove(id) {
        return this.socialMediaService.remove(+id);
    }
};
exports.SocialMediaController = SocialMediaController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Yangi social media yaratish' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_social_media_dto_1.CreateSocialMediaDto]),
    __metadata("design:returntype", void 0)
], SocialMediaController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Barcha social media larni olish' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SocialMediaController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'ID boyicha social media olish' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialMediaController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'ID boyicha social media ni yangilash' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_social_media_dto_1.UpdateSocialMediaDto]),
    __metadata("design:returntype", void 0)
], SocialMediaController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'ID boyicha social media ni ochirish' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialMediaController.prototype, "remove", null);
exports.SocialMediaController = SocialMediaController = __decorate([
    (0, swagger_1.ApiTags)('Social Media'),
    (0, common_1.Controller)('social-media'),
    __metadata("design:paramtypes", [social_media_service_1.SocialMediaService])
], SocialMediaController);
//# sourceMappingURL=social-media.controller.js.map