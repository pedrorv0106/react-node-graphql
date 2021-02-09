/* eslint-disable import/no-commonjs */

require('../utils/env');

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    //eslint-disable-next-line camelcase
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    logging: false,
  },
};
