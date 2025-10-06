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
exports.DonateService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const donate_model_1 = require("./models/donate.model");
let DonateService = class DonateService {
    donateModel;
    constructor(donateModel) {
        this.donateModel = donateModel;
    }
    async create(createDonateDto) {
        const { user_id, recipient_id, notification, is_AnonimPay } = createDonateDto;
        if (!user_id || !recipient_id || !notification) {
            throw new common_1.BadRequestException('Barcha maydonlarni to‘ldiring');
        }
        return this.donateModel.create(createDonateDto);
    }
    async findAll() {
        return this.donateModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const donate = await this.donateModel.findByPk(id, {
            include: { all: true },
        });
        if (!donate)
            throw new common_1.NotFoundException('Donate topilmadi');
        return donate;
    }
    async update(id, updateDonateDto) {
        const donate = await this.donateModel.findByPk(id);
        if (!donate)
            throw new common_1.NotFoundException('Donate topilmadi');
        const [_, updated] = await this.donateModel.update(updateDonateDto, {
            where: { id },
            returning: true,
        });
        return updated[0];
    }
    async remove(id) {
        const delCount = await this.donateModel.destroy({ where: { id } });
        if (!delCount)
            throw new common_1.NotFoundException('Donate topilmadi');
        return { message: 'Donate o‘chirildi', id };
    }
};
exports.DonateService = DonateService;
exports.DonateService = DonateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(donate_model_1.Donate)),
    __metadata("design:paramtypes", [Object])
], DonateService);
//# sourceMappingURL=donate.service.js.map