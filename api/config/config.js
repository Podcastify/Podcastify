require('dotenv').config();

export const DB_USER = process.env.DB_USER ?? 'root';
export const DB_NAME = process.env.DB_NAME ?? 'podcastify';
export const DB_PASSWORD = process.env.DB_PASSWORD ?? '';
export const DB_HOST = process.env.CLEARDB_DATABASE_URL ? process.env.CLEARDB_DATABASE_URL : process.env.DB_HOST ? process.env.DB_HOST : '127.0.0.1';
