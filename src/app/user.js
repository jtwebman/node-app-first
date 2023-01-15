const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

/**
 * @typedef {Object} User - creates a new type named 'User'
 * @property {string} email - a users primary email
 * @property {string} passwordHash - a users password hash
 * @property {string=} verifyEmailToken - an optional token to verify email
 * @property {boolean} verifiedEmail - a users password hash
 */

/**
 * Gets a new user by hashing their password and creating a verify email token
 * @param {Config} config - The system config
 * @param {Config} users - The system config
 * @param {string} email - The users primary email
 * @param {string} password - The users new password in the clear
 * @returns {User} The new user
 */
async function newUser(config, users, email, password) {
  const passwordHash = await bcrypt.hash(password, config.PASSWORD_HASH_SALT_ROUNDS);
  const newUser = {
    email,
    passwordHash,
    verifyEmailToken: uuidv4(),
    verifiedEmail: false
  };
  return users.save(newUser);
}

async function login(email, password) {

}

module.exports = {
  newUser
}