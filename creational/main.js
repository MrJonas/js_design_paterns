var Task = require('./task');


var task1 = new Task('creating something');
var task2 = new Task('creating modules');
var task3 = new Task('creating singlethons');
var task4 = new Task('creating prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
