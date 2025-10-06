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
exports.RecipientService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const recipient_model_1 = require("./models/recipient.model");
let RecipientService = class RecipientService {
    recipientModel;
    constructor(recipientModel) {
        this.recipientModel = recipientModel;
    }
    async create(CreateRecipientDto) {
        const { name, email, address, full_name, password } = CreateRecipientDto;
        if (!name || !email || !address || !full_name || !password) {
            throw new common_1.NotFoundException('Iltimos barchasini kiriting');
        }
        const existsName = await this.recipientModel.findOne({ where: { name } });
        if (existsName) {
            throw new common_1.BadRequestException('Bunday nomli recipient mavjud');
        }
        const existsEmail = await this.recipientModel.findOne({ where: { email } });
        if (existsEmail) {
            throw new common_1.BadRequestException('Bunday email mavjud');
        }
        const existsAddress = await this.recipientModel.findOne({
            where: { address },
        });
        if (existsAddress) {
            throw new common_1.BadRequestException('Bunday address mavjud');
        }
        return this.recipientModel.create(CreateRecipientDto);
    }
    async findAll() {
        return this.recipientModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const recipient = await this.recipientModel.findByPk(id, {
            include: { all: true },
        });
        if (!recipient) {
            throw new common_1.NotFoundException('Companiy not found');
        }
        return recipient;
    }
    async findOneByName(name) {
        const recipientName = await this.recipientModel.findOne({ where: { name } });
        if (!recipientName) {
            throw new common_1.NotFoundException('RecipientName not found');
        }
        return recipientName;
    }
    async update(id, UpdateRecipientDto) {
        const { name, address, email, password, full_name } = UpdateRecipientDto;
        const recipientId = await this.recipientModel.findByPk(id);
        if (!recipientId) {
            throw new common_1.NotFoundException('recipient not found');
        }
        if (name) {
            const existsName = await this.recipientModel.findOne({ where: { name } });
            if (existsName && existsName.id !== id) {
                throw new common_1.BadRequestException('Bu name band ');
            }
        }
        if (address) {
            const existsAddress = await this.recipientModel.findOne({
                where: { address },
            });
            if (existsAddress && existsAddress.id !== id) {
                throw new common_1.BadRequestException('Bunday Addres mavjud boshqa adres toping');
            }
        }
        if (email) {
            const existsEmail = await this.recipientModel.findOne({ where: { email } });
            if (existsEmail && existsEmail.id !== id) {
                throw new common_1.BadRequestException('Bunday Email mavjud');
            }
        }
        const recipient = await this.recipientModel.update(UpdateRecipientDto, {
            where: { id },
            returning: true,
        });
        return recipient[1][0];
    }
    async remove(id) {
        const delCount = await this.recipientModel.destroy({ where: { id } });
        if (!delCount) {
            return { message: 'Bunday recipient mavjud emas' };
        }
        return { message: "Recipient o'chirildi", id };
    }
};
exports.RecipientService = RecipientService;
exports.RecipientService = RecipientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(recipient_model_1.Recipient)),
    __metadata("design:paramtypes", [Object])
], RecipientService);
//# sourceMappingURL=recipient.service.js.map