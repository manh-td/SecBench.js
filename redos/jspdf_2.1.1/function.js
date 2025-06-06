function exploitFunction(payload) {
  const { jsPDF } = require("jspdf");
  const doc = new jsPDF();
  doc.text("Hello world", 10, 10);
  try {
    doc.addImage(payload.payload, 'JPEG', 1, 2);
  } catch (e) {}
  return doc;
}

module.exports = { exploitFunction };