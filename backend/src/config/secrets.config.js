/* store and export sensitive data and credentials as env variables */

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL.trim();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY.trim();
const CLIENT_URL = process.env.CLIENT_URL.trim();
const API_KEY = process.env.API_KEY.trim();
const DOMAIN = process.env.DOMAIN.trim();

module.exports = {
  PORT,
  MONGO_URL,
  API_KEY,
  DOMAIN,
  CLIENT_URL,
  JWT_SECRET_KEY
};
