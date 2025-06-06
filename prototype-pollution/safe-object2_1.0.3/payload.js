function getPayload() {
    return {
        setter: (path, value) => {
            const [key1, key2] = path;
            if (key1 === "__proto__") {
                Object.prototype[key2] = value;
            }
        }
    };
}

module.exports = { getPayload };