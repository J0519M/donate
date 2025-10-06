"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const cards_module_1 = require("./cards/cards.module");
const recipient_social_module_1 = require("./recipient-social/recipient-social.module");
const social_media_module_1 = require("./social-media/social-media.module");
const recipient_module_1 = require("./recipient/recipient.module");
const admin_module_1 = require("./admin/admin.module");
const auth_module_1 = require("./auth/auth.module");
const category_module_1 = require("./category/category.module");
const shop_module_1 = require("./shop/shop.module");
const order_module_1 = require("./order/order.module");
const user_module_1 = require("./user/user.module");
const donate_module_1 = require("./donate/donate.module");
const payments_module_1 = require("./payments/payments.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.PG_HOST,
                port: Number(process.env.PG_PORT),
                username: process.env.PG_USER,
                password: process.env.PG_PASSWORD,
                database: process.env.PG_DATABASE,
                models: [],
                autoLoadModels: true,
                logging: false,
                sync: { alter: true },
                synchronize: true,
            }),
            cards_module_1.CardsModule,
            recipient_social_module_1.RecipientSocialModule,
            social_media_module_1.SocialMediaModule,
            recipient_module_1.RecipientModule,
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
            shop_module_1.ShopModule,
            order_module_1.OrderModule,
            user_module_1.UserModule,
            donate_module_1.DonateModule,
            payments_module_1.PaymentModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map