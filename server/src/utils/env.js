/* eslint-disable import/no-commonjs */

const { join } = require('path');
const { config } = require('dotenv');

config({ path: join(__dirname, '../../.env') });
