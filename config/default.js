/**
 * @typedef {Object} Config - config type
 * @property {number} PASSWORD_HASH_SALT_ROUNDS - salt rounds for bcrypt tool, should always be a integer
 */


module.exports = {
  PASSWORD_HASH_SALT_ROUNDS: process.env.PASSWORD_HASH_SALT_ROUNDS ? parseInt(process.env.PASSWORD_HASH_SALT_ROUNDS, 10) : 10
}