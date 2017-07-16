
var repoFactory = function () {
    var repos = this;
    var repoList = [
        {name: "task", source: "./taskRepo"}
    ];

    //when factory is created, all repos is cashed:
    repoList.forEach(function (repo) {
       repos[repo.name] = require(repo.source)();
    });
};

module.exports = new repoFactory;