require('dotenv').config();
const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT} = process.env;

if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST || !DB_DIALECT) {
    throw new Error('missing DB env');
}

const config = {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
};

module.exports = config;
