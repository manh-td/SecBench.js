function exploitFunction(payload) {
    const saferEval = require("safer-eval");
    const { payload: evalPayload } = payload;

    try {
        saferEval(evalPayload);
    } catch (error) {}
}

module.exports = { exploitFunction };