const freespace = require("freespace");

function exploitFunction(payload) {
    return new Promise((resolve, reject) => {
        freespace.check(payload)
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

module.exports = { exploitFunction };