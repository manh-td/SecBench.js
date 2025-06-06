function exploitFunction(command) {
  const a = require("ts-process-promises");
  a.exec(command, {}).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.error(err);
  });
}

module.exports = { exploitFunction };