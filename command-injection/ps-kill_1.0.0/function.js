function exploitFunction(payload) {
  ps_kill.kill(payload, function (error) {
    if (error) {
      console.error(error);
    }
  });
}

module.exports = { exploitFunction };