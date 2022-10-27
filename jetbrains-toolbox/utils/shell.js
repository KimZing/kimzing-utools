const {exec} = require("child_process");

function execute(command) {
    exec(command, (err) => {
        if (err) utools.showNotification(err.message);
    })
}

module.exports = {
    execute
}