const revalidator = require("revalidator");
const measureTime = require("../utils").measureTime;

function exploitFunction(payload) {
    const myObj = payload;
    let t = measureTime(function () {
        revalidator.validate(myObj, {
            properties: {
                url: {
                    description: "the url the object should be stored at",
                    type: "string",
                    format: "url",
                    required: true,
                },
            },
        });
    });
    let time = t[0] + t[1] / 1000000000;
    return time;
}

module.exports = { exploitFunction };