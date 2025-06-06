function exploitFunction(payload) {
  // Simulate the Image object for demonstration purposes
  const Image = {
    load: () => ({ stream: (data) => { console.log(data); } })
  };

  var timetaken = "Time taken by addCount function";
  console.time(timetaken);
  Image.stream(payload);
  console.timeEnd(timetaken);
}

module.exports = { exploitFunction };