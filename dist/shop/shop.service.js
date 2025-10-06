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
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const shop_model_1 = require("./model/shop.model");
let ShopService = class ShopService {
    shopModel;
    constructor(shopModel) {
        this.shopModel = shopModel;
    }
    async create(createShopDto) {
        const { title, price, recipient_id, category_id } = createShopDto;
        if (!title || !price || !recipient_id || !category_id) {
            throw new common_1.NotFoundException('Iltimos barchasini to‘ldiring');
        }
        const exists = await this.shopModel.findOne({ where: { title } });
        if (exists) {
            throw new common_1.BadRequestException('Bunday nomli shop mavjud');
        }
        return this.shopModel.create(createShopDto);
    }
    async findAll() {
        return this.shopModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const shop = await this.shopModel.findByPk(id, { include: { all: true } });
        if (!shop) {
            throw new common_1.NotFoundException('Shop topilmadi');
        }
        return shop;
    }
    async update(id, updateShopDto) {
        const shop = await this.shopModel.findByPk(id);
        if (!shop) {
            throw new common_1.NotFoundException('Shop topilmadi');
        }
        if (updateShopDto.title) {
            const exists = await this.shopModel.findOne({
                where: { title: updateShopDto.title },
            });
            if (exists && exists.id !== id) {
                throw new common_1.BadRequestException('Bu nom band');
            }
        }
        const updated = await this.shopModel.update(updateShopDto, {
            where: { id },
            returning: true,
        });
        return updated[1][0];
    }
    async remove(id) {
        const delCount = await this.shopModel.destroy({ where: { id } });
        if (!delCount)
            throw new common_1.NotFoundException('Shop topilmadi');
        return { message: 'Shop o‘chirildi', id };
    }
};
exports.ShopService = ShopService;
exports.ShopService = ShopService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(shop_model_1.Shop)),
    __metadata("design:paramtypes", [Object])
], ShopService);
//# sourceMappingURL=shop.service.js.map