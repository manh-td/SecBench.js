function getPayload() {
    return {
        input: "package-lock.json",
        start: 0,
        duration: 30,
        command: "n || touch ffmpegdotjs; #"
    };
}

module.exports = { getPayload };