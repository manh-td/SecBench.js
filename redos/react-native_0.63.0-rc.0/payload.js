function getPayload() {
    return "http://foobar.00.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0." + 
           "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
           "0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/`~";
}

module.exports = { getPayload };