function exploitFunction(payload) {
  try {
    const fs = require("fs");
    const hostsFile = fs.readFileSync(payload).toString();
    return hostsFile;
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    return null; // Return null or an appropriate error message
  }
}

module.exports = { exploitFunction };