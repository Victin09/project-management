import { Module } from '@nestjs/common';

import { UserController } from '@application/controller/user.controller';
import { AuthController } from '@application/controller/auth.controller';
import { UserService } from '@domain/service/user.service';
import { DatabaseModule } from '@infraestructure/database/database.module';
import { modelProviders } from '@infraestructure/model/provider.model';
import { UserRepository } from '@infraestructure/repository/user.repository';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController, AuthController],
    providers: [UserService, UserRepository, ...modelProviders],
    exports: [...modelProviders],
})
export class ApiModule {}
