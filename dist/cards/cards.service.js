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
exports.CardsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const card_model_1 = require("./models/card.model");
const recipient_model_1 = require("../recipient/models/recipient.model");
let CardsService = class CardsService {
    cardModel;
    recipientModel;
    constructor(cardModel, recipientModel) {
        this.cardModel = cardModel;
        this.recipientModel = recipientModel;
    }
    async create(createCardDto) {
        const { card_type, card_number, recipient_id, expiry_date } = createCardDto;
        if (!card_type || !card_number || !recipient_id || !expiry_date) {
            throw new common_1.BadRequestException('Iltimos, barcha maydonlarni kiriting');
        }
        const recipient = await this.recipientModel.findByPk(recipient_id);
        if (!recipient) {
            throw new common_1.NotFoundException('Bunday recipient mavjud emas');
        }
        return this.cardModel.create(createCardDto);
    }
    findAll() {
        return this.cardModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const cardId = await this.cardModel.findByPk(id, {
            include: { all: true },
        });
        if (!cardId) {
            throw new common_1.NotFoundException('Card not found');
        }
        return cardId;
    }
    async update(id, UpdateCardDto) {
        const { card_number, card_type, expiry_date, recipient_id } = UpdateCardDto;
        const cardId = await this.cardModel.findByPk(id);
        if (!cardId) {
            throw new common_1.BadRequestException('Card not found');
        }
        const card = await this.cardModel.update(UpdateCardDto, {
            where: { id },
            returning: true,
        });
        return card[1][0];
    }
    async remove(id) {
        const deleted = await this.cardModel.destroy({ where: { id } });
        if (!deleted) {
            return { message: 'Bunday card mavjud emas' };
        }
        return { message: "Card O'chirildi " };
    }
};
exports.CardsService = CardsService;
exports.CardsService = CardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(card_model_1.Card)),
    __param(1, (0, sequelize_1.InjectModel)(recipient_model_1.Recipient)),
    __metadata("design:paramtypes", [Object, Object])
], CardsService);
//# sourceMappingURL=cards.service.js.map