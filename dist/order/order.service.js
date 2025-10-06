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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const order_model_1 = require("./model/order.model");
let OrderService = class OrderService {
    orderModel;
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async create(createOrderDto) {
        const { user_id, shop_id, location, status, quanity } = createOrderDto;
        if (!user_id || !shop_id || !location || !status || !quanity) {
            throw new common_1.NotFoundException('Iltimos barchasini to‘ldiring');
        }
        return this.orderModel.create(createOrderDto);
    }
    async findAll() {
        return this.orderModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const order = await this.orderModel.findByPk(id, {
            include: { all: true },
        });
        if (!order)
            throw new common_1.NotFoundException('Order topilmadi');
        return order;
    }
    async update(id, updateOrderDto) {
        const order = await this.orderModel.findByPk(id);
        if (!order)
            throw new common_1.NotFoundException('Order topilmadi');
        const updated = await this.orderModel.update(updateOrderDto, {
            where: { id },
            returning: true,
        });
        return updated[1][0];
    }
    async remove(id) {
        const delCount = await this.orderModel.destroy({ where: { id } });
        if (!delCount)
            throw new common_1.NotFoundException('Order topilmadi');
        return { message: 'Order o‘chirildi', id };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(order_model_1.Order)),
    __metadata("design:paramtypes", [Object])
], OrderService);
//# sourceMappingURL=order.service.js.map