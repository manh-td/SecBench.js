const { digger } = require('@lyngs/digger');

function exploitFunction(obj, key, value, options) {
    digger(obj, key, value, options);
}

module.exports = { exploitFunction };