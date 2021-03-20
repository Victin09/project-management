import { createConnection } from 'typeorm';

import { DB_PROVIDER, DB_SERVER } from '@constants/app.constants';

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () =>
            await createConnection({
                type: 'postgres',
                host: '192.168.1.102',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'project_manager',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
    },
];
