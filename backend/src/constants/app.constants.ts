export const DB_PROVIDER = 'DATABASE_CONNECTION';
export const USER_MODEL_PROVIDER = 'USER_REPOSITORY';
export const SERVICE = 'DB_MONGO_SERVICE';
export const DATABASE_SERVICE = process.env.DATABASE_SERVICE || 'DATABASE_SERVICE';
export const DB_SERVER = process.env.DB_SERVER || 'mongodb://192.168.1.102/project-manager';
export const APP_PORT = process.env.PORT || 4000;
export const jwtSecret = 'secretKey';
