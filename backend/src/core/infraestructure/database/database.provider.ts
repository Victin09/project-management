import * as mongoose from 'mongoose';

import { DB_PROVIDER, DB_SERVER } from '@constants/app.constants';

export const databaseProvider = [
    {
        provide: DB_PROVIDER,
        useFactory: (): Promise<typeof mongoose> => mongoose.connect(DB_SERVER),
    },
];
