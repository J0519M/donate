"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonateModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const donate_service_1 = require("./donate.service");
const donate_controller_1 = require("./donate.controller");
const donate_model_1 = require("./models/donate.model");
const user_model_1 = require("../user/models/user.model");
const recipient_model_1 = require("../recipient/models/recipient.model");
const payment_model_1 = require("../payments/models/payment.model");
let DonateModule = class DonateModule {
};
exports.DonateModule = DonateModule;
exports.DonateModule = DonateModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([donate_model_1.Donate, user_model_1.User, recipient_model_1.Recipient, payment_model_1.Payment])],
        controllers: [donate_controller_1.DonateController],
        providers: [donate_service_1.DonateService],
        exports: [donate_service_1.DonateService],
    })
], DonateModule);
//# sourceMappingURL=donate.module.js.map