"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const payments_service_1 = require("./payments.service");
const payments_controller_1 = require("./payments.controller");
const payment_model_1 = require("./models/payment.model");
const user_model_1 = require("../user/models/user.model");
const donate_model_1 = require("../donate/models/donate.model");
const order_model_1 = require("../order/model/order.model");
let PaymentModule = class PaymentModule {
};
exports.PaymentModule = PaymentModule;
exports.PaymentModule = PaymentModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([payment_model_1.Payment, user_model_1.User, donate_model_1.Donate, order_model_1.Order])],
        controllers: [payments_controller_1.PaymentController],
        providers: [payments_service_1.PaymentService],
        exports: [payments_service_1.PaymentService],
    })
], PaymentModule);
//# sourceMappingURL=payments.module.js.map