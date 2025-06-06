function exploitFunction(payload) {
  const csv = require("fast-csv");
  const str1 = payload.str1;

  let start = process.hrtime();
  const stream = csv
    .parse({
      ignoreEmpty: true,
      delimiter: "\t",
    })
    .on("error", (error) => {})
    .on("data", () => {})
    .on("end", () => {
      var t = process.hrtime(start);
      let time = t[0] + t[1] / 1000000000;
      console.log(`Time taken: ${time} seconds`);
    });

  stream.write(str1);
  stream.end();
}

module.exports = { exploitFunction };