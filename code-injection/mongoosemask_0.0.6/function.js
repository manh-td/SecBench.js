function exploitFunction(payload) {
    const mask = require("mongoosemask");
    const obj = {};
    const fieldsToMask = payload;

    fieldsToMask.forEach(field => {
        try {
            mask.mask(obj, [field]);
        } catch (error) {
            // Handle error if any
        }
    });

    return obj;
}

module.exports = { exploitFunction };