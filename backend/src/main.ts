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
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();
