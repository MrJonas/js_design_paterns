var Task = function (name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.completed = function () {
    console.log('completing Task: ' + this.name);
    this.completed = true;
};


Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};


var task1 = new Task('creating something');
var task2 = new Task('creating modules');
var task3 = new Task('creating singlethons');
var task4 = new Task('creating prototypes');

task1.completed();
task2.save();
task3.save();
task4.save();

