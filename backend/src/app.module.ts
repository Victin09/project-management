import { Module } from '@nestjs/common';

import { ApiModule } from '@infraestructure/module/api.module';

@Module({
    imports: [ApiModule],
})
export class AppModule {}
