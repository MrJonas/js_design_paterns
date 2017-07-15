var repo = function () {

    return {
        get: function (id) {
            console.log('getting task' + id);
            return {
                name: 'new task from db'
            }
        },
        save: function (task) {
            console.log('saving to db' + task.name )

        }
    }
}

moodule.exports = repo();