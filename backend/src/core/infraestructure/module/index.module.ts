import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infraestructure/database/database.module';
import { modelProviders } from '@infraestructure/model/provider.model';
import { UserController } from '@application/controller/user.controller';
import { UserService } from '@domain/service/user.service';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService, ...modelProviders],
    exports: [...modelProviders],
})
export class IndexModule {}
