function exploitFunction(payload) {
  // Use the Mootools merge function
  const merge = require('mootools').merge;
  merge({}, payload);
}

module.exports = { exploitFunction };