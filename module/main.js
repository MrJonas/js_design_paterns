var Task = require('./task');
var Repo = require('./taskRepo');

var task1 = new Task(Repo.get(1));
var task2 = new Task('creating modules');
var task3 = new Task('creating singlethons');
var task4 = new Task('creating prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
