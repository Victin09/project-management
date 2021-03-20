// Only For module alias
import 'module-alias/register';
import * as path from 'path';
import * as moduleAlias from 'module-alias';
moduleAlias.addAliases({
    '@domain': path.resolve(__dirname, 'core/domain'),
    '@application': path.resolve(__dirname, 'core/application'),
    '@infraestructure': path.resolve(__dirname, 'core/infraestructure'),
    '@constants': path.format({ dir: __dirname, name: 'constants' }),
});

// NestJS imports
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // Swagger config
    const options = new DocumentBuilder().setTitle('Project Manager').setDescription('A project manager').setVersion('1.0').build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
