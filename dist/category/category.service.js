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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const category_model_1 = require("./model/category.model");
let CategoryService = class CategoryService {
    categoryModel;
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async create(createCategoryDto) {
        const { name } = createCategoryDto;
        if (!name)
            throw new common_1.NotFoundException('Name kiritilishi kerak');
        const exists = await this.categoryModel.findOne({ where: { name } });
        if (exists)
            throw new common_1.BadRequestException('Bunday kategoriya mavjud');
        return this.categoryModel.create(createCategoryDto);
    }
    async findAll() {
        return this.categoryModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const category = await this.categoryModel.findByPk(id, {
            include: { all: true },
        });
        if (!category)
            throw new common_1.NotFoundException('Kategoriya topilmadi');
        return category;
    }
    async update(id, updateCategoryDto) {
        const category = await this.categoryModel.findByPk(id);
        if (!category)
            throw new common_1.NotFoundException('Kategoriya topilmadi');
        if (updateCategoryDto.name) {
            const exists = await this.categoryModel.findOne({
                where: { name: updateCategoryDto.name },
            });
            if (exists && exists.id !== id) {
                throw new common_1.BadRequestException('Bunday nomli kategoriya mavjud');
            }
        }
        const updated = await this.categoryModel.update(updateCategoryDto, {
            where: { id },
            returning: true,
        });
        return updated[1][0];
    }
    async remove(id) {
        const delCount = await this.categoryModel.destroy({ where: { id } });
        if (!delCount)
            throw new common_1.NotFoundException('Kategoriya topilmadi');
        return { message: 'Kategoriya o‘chirildi', id };
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(category_model_1.Category)),
    __metadata("design:paramtypes", [Object])
], CategoryService);
//# sourceMappingURL=category.service.js.map