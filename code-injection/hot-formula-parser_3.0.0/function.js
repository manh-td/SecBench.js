function exploitFunction(payload) {
  const FormulaParser = require("hot-formula-parser").Parser;
  try {
    let parser = new FormulaParser();
    parser.parse(payload);
  } catch (error) {
    console.error("Error during parsing:", error);
  }
}

module.exports = { exploitFunction };