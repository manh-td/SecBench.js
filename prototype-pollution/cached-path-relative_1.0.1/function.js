function exploitFunction(payload) {
    var relative = require("cached-path-relative");
    // Ensure the keys and values are strings before passing them to relative
    const fromKey = Object.keys(payload)[0];
    const fromValue = Object.values(payload)[0];

    if (typeof fromKey === 'string' && typeof fromValue === 'object') {
        relative(fromKey, fromValue);
    } else {
        throw new Error('Invalid payload format');
    }
}

module.exports = { exploitFunction };