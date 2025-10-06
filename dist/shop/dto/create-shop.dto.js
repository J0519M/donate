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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateShopDto {
    name;
    title;
    price;
    count;
    recipient_id;
    category_id;
    description;
}
exports.CreateShopDto = CreateShopDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Laptop', description: 'Do‘kon mahsulotining nomi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateShopDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'MacBook Pro 16"',
        description: 'Mahsulot sarlavhasi',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateShopDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1500.5, description: 'Mahsulot narxi' }),
    (0, class_validator_1.IsDecimal)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateShopDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10, description: 'Mahsulot soni (count)' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateShopDto.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Recipientning ID si' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateShopDto.prototype, "recipient_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Category ID si' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateShopDto.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Yangi model, 16GB RAM, 512GB SSD',
        description: 'Mahsulot tavsifi',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateShopDto.prototype, "description", void 0);
//# sourceMappingURL=create-shop.dto.js.map