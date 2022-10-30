import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 5000;
export const dbHOST = process.env.DB_HOST || localhost;
export const dbPORT = process.env.DB_PORT || 3306;
export const dbUSER = process.env.DB_USER || root;
export const dbPASSWORD = process.env.DB_PASSWORD || password;
export const dbNAME = process.env.DB_NAME || almazondb;