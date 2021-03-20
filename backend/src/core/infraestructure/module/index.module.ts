import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { DatabaseModule } from '@infraestructure/database/database.module';
import { modelProviders } from '@infraestructure/entity/provider.entity';
import { UserController } from '@application/controller/user.controller';
import { UserService } from '@domain/service/user.service';
import { AuthController } from '@application/controller/auth.controller';
import { UserRepository } from '@infraestructure/repository/user.repository';
import { AuthService } from '@domain/service/auth.service';
import { LocalStrategy } from '@domain/auth/local.strategy';
import { jwtSecret } from '@constants/app.constants';
import { JwtStrategy } from '@domain/auth/jwt.strategy';

@Module({
    imports: [
        DatabaseModule,
        PassportModule,
        JwtModule.register({
            secret: jwtSecret,
            signOptions: { expiresIn: '1d' },
        }),
    ],
    controllers: [UserController, AuthController],
    providers: [LocalStrategy, JwtStrategy, UserService, AuthService, UserRepository, ...modelProviders],
    exports: [JwtModule, ...modelProviders],
})
export class IndexModule {}
