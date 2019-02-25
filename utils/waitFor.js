/**
 * similar to sleep function
 * @param {number} ms
 */
const waitFor = ms => new Promise(r => setTimeout(r, ms));

module.exports = waitFor;
