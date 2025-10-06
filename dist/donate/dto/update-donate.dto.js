"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDonateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_donate_dto_1 = require("./create-donate.dto");
class UpdateDonateDto extends (0, swagger_1.PartialType)(create_donate_dto_1.CreateDonateDto) {
}
exports.UpdateDonateDto = UpdateDonateDto;
//# sourceMappingURL=update-donate.dto.js.map