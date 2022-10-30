import { createPool } from 'mysql2/promise';
import {
    dbHOST,
    dbPORT,
    dbUSER,
    dbPASSWORD,
    dbNAME
} from './config.js';

export const pool = createPool({
    host: dbHOST,
    port: dbPORT,
    user: dbUSER,
    password: dbPASSWORD,
    database: dbNAME,
});