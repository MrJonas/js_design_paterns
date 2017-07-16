
//Constructor pattern
var Task = function (data) {
    this.name = data.name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log('completing Task: ' + this.name);
    this.completed = true;
};


Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};


//urgentTask (decorator patten):

var urgentTask = function (name, priority) {
    Task.call(this);
    this.priority = priority;
};

urgentTask.prototype = Object.create(Task.prototype);

urgentTask.prototype.notify = function() {

}

urgentTask.prototype.save = function () {
    this.notify();
    Task.prototype.save.call(this);
}

module.exports = Task;
