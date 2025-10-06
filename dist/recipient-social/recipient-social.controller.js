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
exports.RecipientSocialController = void 0;
const common_1 = require("@nestjs/common");
const recipient_social_service_1 = require("./recipient-social.service");
const create_recipient_social_dto_1 = require("./dto/create-recipient-social.dto");
const update_recipient_social_dto_1 = require("./dto/update-recipient-social.dto");
const swagger_1 = require("@nestjs/swagger");
let RecipientSocialController = class RecipientSocialController {
    recipientSocialService;
    constructor(recipientSocialService) {
        this.recipientSocialService = recipientSocialService;
    }
    create(createRecipientSocialDto) {
        return this.recipientSocialService.create(createRecipientSocialDto);
    }
    findAll() {
        return this.recipientSocialService.findAll();
    }
    findOne(id) {
        return this.recipientSocialService.findOne(+id);
    }
    update(id, updateRecipientSocialDto) {
        return this.recipientSocialService.update(+id, updateRecipientSocialDto);
    }
    remove(id) {
        return this.recipientSocialService.remove(+id);
    }
};
exports.RecipientSocialController = RecipientSocialController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Recipient Social' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recipient_social_dto_1.CreateRecipientSocialDto]),
    __metadata("design:returntype", void 0)
], RecipientSocialController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all Recipient Social' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecipientSocialController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Recipient Social by ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecipientSocialController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Recipient Social by ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_recipient_social_dto_1.UpdateRecipientSocialDto]),
    __metadata("design:returntype", void 0)
], RecipientSocialController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Recipient Social by ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecipientSocialController.prototype, "remove", null);
exports.RecipientSocialController = RecipientSocialController = __decorate([
    (0, swagger_1.ApiTags)('Recipient Social'),
    (0, common_1.Controller)('recipient-social'),
    __metadata("design:paramtypes", [recipient_social_service_1.RecipientSocialService])
], RecipientSocialController);
//# sourceMappingURL=recipient-social.controller.js.map