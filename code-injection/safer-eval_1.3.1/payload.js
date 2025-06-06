function getPayload() {
    return {
        payload: "console.constructor.constructor('return 1+(Object.prototype.polluted=`yes`)')().env"
    };
}

module.exports = { getPayload };