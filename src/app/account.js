/**
 * The account application module
 * @module App/Account
 */

/**
 * @typedef {Object} module:App/Account.AccountRecord - creates a new type named 'User'
 * @property {module:App/User.UserRecord} owner - the primary owner of the account
 * @property {List[]} lists - all the current lists on the account
 */

/**
 * Creates a new account with a owner
 * @param {module:App/User.UserRecord} owner - the primary owner of the account
 * @returns {module:App/Account.AccountRecord} The new account
 */
function newAccount(owner) {
  return {
    owner,
    lists: []
  }
}

module.exports = {
  newAccount,
}