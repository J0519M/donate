"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function start() {
    const PORT = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('donate-system')
        .setDescription('The donate system API description')
        .setVersion('1.0')
        .addTag('You are welcome')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    await app.listen(PORT, () => {
        console.log(` Server is running on http://localhost:${PORT}`);
        console.log(` Swagger is running on http://localhost:${PORT}/api`);
    });
}
start();
//# sourceMappingURL=main.js.map