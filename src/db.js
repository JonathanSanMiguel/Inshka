import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'almazondb',
    port: 3306
});