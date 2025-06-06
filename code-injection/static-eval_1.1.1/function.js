function exploitFunction(payload) {
    const evaluate = require("static-eval");
    const parse = require("esprima").parse;

    expect({}.polluted).toBe(undefined);

    let ast = parse(payload.src).body[0].expression;
    let res = evaluate(ast, {});

    expect({}.polluted).toBe("yes");
}

module.exports = { exploitFunction };