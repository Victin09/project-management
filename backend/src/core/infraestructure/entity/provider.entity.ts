import { Connection } from 'typeorm';

import { USER_MODEL_PROVIDER, DB_PROVIDER } from '@constants/app.constants';
import { User } from '@infraestructure/entity/user.entity';

export const modelProviders = [
    {
        provide: USER_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: [DB_PROVIDER],
    },
];
