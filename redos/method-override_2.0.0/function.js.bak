function exploitFunction(payload) {
  const methodOverride = require("method-override");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    let middleware = methodOverride();
    middleware(
      payload,
      {
        getHeader: () => {
          return "";
        },
        setHeader: () => {},
      },
      () => {}
    );
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };