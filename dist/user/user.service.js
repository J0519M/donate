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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./models/user.model");
let UserService = class UserService {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        const { full_name, password, email, card_number, is_active } = createUserDto;
        if (!full_name || !password || !is_active || !email || !card_number) {
            throw new common_1.BadRequestException('Iltimos barcha maydonlarni kiriting');
        }
        const existsEmail = await this.userModel.findOne({ where: { email } });
        if (existsEmail) {
            throw new common_1.BadRequestException('Bunday email mavjud');
        }
        const existsCard = await this.userModel.findOne({ where: { card_number } });
        if (existsCard) {
            throw new common_1.BadRequestException('Bunday karta raqami mavjud');
        }
        return this.userModel.create(createUserDto);
    }
    async findAll() {
        return this.userModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const user = await this.userModel.findByPk(id, { include: { all: true } });
        if (!user) {
            throw new common_1.NotFoundException('User topilmadi');
        }
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.userModel.findByPk(id);
        if (!user) {
            throw new common_1.NotFoundException('User topilmadi');
        }
        if (updateUserDto.email) {
            const existsEmail = await this.userModel.findOne({
                where: { email: updateUserDto.email },
            });
            if (existsEmail && existsEmail.id !== id) {
                throw new common_1.BadRequestException('Bunday email allaqachon band');
            }
        }
        if (updateUserDto.card_number) {
            const existsCard = await this.userModel.findOne({
                where: { card_number: updateUserDto.card_number },
            });
            if (existsCard && existsCard.id !== id) {
                throw new common_1.BadRequestException('Bunday karta raqami band');
            }
        }
        const updated = await this.userModel.update(updateUserDto, {
            where: { id },
            returning: true,
        });
        return updated[1][0];
    }
    async remove(id) {
        const delCount = await this.userModel.destroy({ where: { id } });
        if (!delCount) {
            throw new common_1.NotFoundException('User topilmadi');
        }
        return { message: 'User o‘chirildi', id };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UserService);
//# sourceMappingURL=user.service.js.map