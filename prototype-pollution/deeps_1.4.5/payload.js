function getPayload() {
    return {
        setPrototypePollution: (obj) => {
            obj.__proto__.polluted = "yes";
        }
    };
}

module.exports = { getPayload };