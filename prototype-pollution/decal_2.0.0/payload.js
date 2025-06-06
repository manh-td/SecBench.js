function getPayload() {
    return {
        setPrototypePollution: (obj) => {
            decal.set(obj, "__proto__.polluted", "yes");
        }
    };
}

module.exports = { getPayload };