function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      const value = source[key];
      if (value instanceof Promise) continue;

      if (
        isObject(value) &&
        !(value instanceof Map) &&
        !(value instanceof Set) &&
        !(value instanceof Date) &&
        !(value instanceof Buffer) &&
        !(value instanceof RegExp) &&
        !(value instanceof URL)
      ) {
        if (!target[key])
          Object.assign(target, {
            [key]: Object.create(Object.getPrototypeOf(value)),
          });
        mergeDeep(target[key], value);
      } else {
        Object.assign(target, { [key]: value });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

function exploitFunction(payload) {
    const a = {};
    mergeDeep(a, payload);
    return a.polluted;
}

module.exports = { exploitFunction };