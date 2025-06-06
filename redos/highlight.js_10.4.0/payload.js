function getPayload() {
    return "r",
      "#' @param `x" + "\\_".repeat(10) + "_ code{numeric} foobar"; // Reduced the number of repetitions
}

module.exports = { getPayload };