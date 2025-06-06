function exploitFunction(payload) {
  const { obj } = payload;

  // Use the object to demonstrate the vulnerability
  expect({}.polluted).toBe(undefined); // Initial check
  obj.polluted; // This should be "yes" if the vulnerability is exploited
}

module.exports = { exploitFunction };