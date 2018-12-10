// env-config.js
require('dotenv').config({ path: '/.env' });

module.exports = {
  'process.env.ACCESS_TOKEN': process.env.ACCESS_TOKEN
};
