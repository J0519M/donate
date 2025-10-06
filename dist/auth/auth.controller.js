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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_admin_dto_1 = require("../admin/dto/create-admin.dto");
const signin_admin_dto_1 = require("../admin/dto/signin-admin.dto");
const create_recipient_dto_1 = require("../recipient/dto/create-recipient.dto");
const signin_recipent_dto_1 = require("../recipient/dto/signin-recipent.dto");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    signupAdmin(dto) {
        return this.authService.signupAdmin(dto);
    }
    signinAdmin(dto) {
        return this.authService.signinAdmin(dto);
    }
    signupRecipient(dto) {
        return this.authService.signupRecipient(dto);
    }
    signinRecipient(dto) {
        return this.authService.signinRecipient(dto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('admin/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signupAdmin", null);
__decorate([
    (0, common_1.Post)('admin/signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_admin_dto_1.SigninAdminDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signinAdmin", null);
__decorate([
    (0, common_1.Post)('recipient/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recipient_dto_1.CreateRecipientDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signupRecipient", null);
__decorate([
    (0, common_1.Post)('recipient/signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof signin_recipent_dto_1.SigninRecipientDto !== "undefined" && signin_recipent_dto_1.SigninRecipientDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signinRecipient", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map