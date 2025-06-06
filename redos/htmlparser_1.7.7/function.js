function exploitFunction(payload) {
  const htmlparser = require("htmlparser");
  const { rawHtml } = payload;

  let handler = new htmlparser.DefaultHandler(function (error, dom) {});
  let parser = new htmlparser.Parser(handler);

  parser.parseComplete(rawHtml);
}

module.exports = { exploitFunction };