
var repo = require('./taskRepository');

//Constructor pattern
var Task = function (name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log('completing Task: ' + this.name);
    this.completed = true;
};


Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
    repo.save(this);
};

module.exports = Task;
