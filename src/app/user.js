const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
/**
 * The user repository module
 * @module App/User
 */

/**
 * @typedef {Object} module:App/User.UserRecord - A user record
 * @property {string} email - a users primary email
 * @property {string} passwordHash - a users password hash
 * @property {string=} verifyEmailToken - an optional token to verify email
 * @property {boolean} verifiedEmail - a users password hash
 */

/**
 * Gets a new user by hashing their password and creating a verify email token
 * @param {module:Config} config - The system config
 * @param {module:Data/UserRepo} userRepo - The user repo
 * @param {string} email - The users primary email
 * @param {string} password - The users new password in the clear
 * @returns {module:App/User.UserRecord} The new user
 */
async function newUser(config, userRepo, email, password) {
  const passwordHash = await bcrypt.hash(password, config.PASSWORD_HASH_SALT_ROUNDS);
  const newUser = {
    email,
    passwordHash,
    verifyEmailToken: uuidv4(),
    verifiedEmail: false
  };
  return userRepo.save(newUser);
}

async function login(userRepo, email, password) {

}

module.exports = {
  newUser
}