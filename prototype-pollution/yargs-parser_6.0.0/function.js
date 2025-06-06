const yargsParser = require("yargs-parser");

function exploitFunction(commandLineArgs) {
  const parsedArgs = yargsParser(commandLineArgs);
  return parsedArgs;
}

module.exports = { exploitFunction };