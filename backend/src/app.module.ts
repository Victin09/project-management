import { Module } from '@nestjs/common';

import { IndexModule } from '@infraestructure/module/index.module';

@Module({
    imports: [IndexModule],
})
export class AppModule {}
