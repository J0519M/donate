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
exports.DonateController = void 0;
const common_1 = require("@nestjs/common");
const donate_service_1 = require("./donate.service");
const create_donate_dto_1 = require("./dto/create-donate.dto");
const update_donate_dto_1 = require("./dto/update-donate.dto");
const swagger_1 = require("@nestjs/swagger");
let DonateController = class DonateController {
    donateService;
    constructor(donateService) {
        this.donateService = donateService;
    }
    create(createDonateDto) {
        return this.donateService.create(createDonateDto);
    }
    findAll() {
        return this.donateService.findAll();
    }
    findOne(id) {
        return this.donateService.findOne(+id);
    }
    update(id, updateDonateDto) {
        return this.donateService.update(+id, updateDonateDto);
    }
    remove(id) {
        return this.donateService.remove(+id);
    }
};
exports.DonateController = DonateController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Donate yaratish' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_donate_dto_1.CreateDonateDto]),
    __metadata("design:returntype", void 0)
], DonateController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Barcha donate larni olish' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DonateController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Bitta donate ni olish' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DonateController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Donate ni yangilash' }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_donate_dto_1.UpdateDonateDto]),
    __metadata("design:returntype", void 0)
], DonateController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Donate ni o‘chirish' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DonateController.prototype, "remove", null);
exports.DonateController = DonateController = __decorate([
    (0, swagger_1.ApiTags)('Donate'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('donate'),
    __metadata("design:paramtypes", [donate_service_1.DonateService])
], DonateController);
//# sourceMappingURL=donate.controller.js.map