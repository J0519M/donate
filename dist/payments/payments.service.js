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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const payment_model_1 = require("./models/payment.model");
let PaymentService = class PaymentService {
    paymentModel;
    constructor(paymentModel) {
        this.paymentModel = paymentModel;
    }
    async create(createPaymentDto) {
        const { user_id, donate_id, order_id, payment_method, status, amount, payment_date, } = createPaymentDto;
        if (!user_id ||
            !donate_id ||
            !order_id ||
            !payment_method ||
            !status ||
            !amount) {
            throw new common_1.BadRequestException('Barcha maydonlarni to‘ldiring');
        }
        return this.paymentModel.create(createPaymentDto);
    }
    async findAll() {
        return this.paymentModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const payment = await this.paymentModel.findByPk(id, {
            include: { all: true },
        });
        if (!payment)
            throw new common_1.NotFoundException('Payment topilmadi');
        return payment;
    }
    async update(id, updatePaymentDto) {
        const payment = await this.paymentModel.findByPk(id);
        if (!payment)
            throw new common_1.NotFoundException('Payment topilmadi');
        const [_, updated] = await this.paymentModel.update(updatePaymentDto, {
            where: { id },
            returning: true,
        });
        return updated[0];
    }
    async remove(id) {
        const delCount = await this.paymentModel.destroy({ where: { id } });
        if (!delCount)
            throw new common_1.NotFoundException('Payment topilmadi');
        return { message: 'Payment o‘chirildi', id };
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(payment_model_1.Payment)),
    __metadata("design:paramtypes", [Object])
], PaymentService);
//# sourceMappingURL=payments.service.js.map