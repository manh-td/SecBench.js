function exploitFunction(payload) {
    const { ffmpegdotjs } = require("ffmpegdotjs");
    const { input, start, duration, command } = payload;

    console.log("FFMPEGDOTJS:", ffmpegdotjs); // Debug log to check if the module is loaded

    return ffmpegdotjs.trimvideo(input, start, duration, command)
        .then(() => {})
        .catch((err) => {})
        .finally(() => {});
}

module.exports = { exploitFunction };