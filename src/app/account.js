/**
 * @typedef {Object} Account - creates a new type named 'User'
 * @property {User} owner - the primary owner of the account
 * @property {List[]} lists - all the current lists on the account
 */

/**
 * Creates a new account with a owner
 * @param {User} owner - the primary owner of the account
 * @returns {Account} The new account
 */
function newAccount(owner) {
  return {
    owner,
    lists: []
  }
}