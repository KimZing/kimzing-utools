const {exec} = require("child_process");

function execute(command) {
    if (utools.isMacOS()) {
        exec(`PATH=$PATH:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin;${command}`, (err) => {
            if (err) utools.showNotification(err.message);
        })
    } else {
        exec(`${command}`, (err) => {
            if (err) utools.showNotification(err.message);
        })
    }
}

module.exports = {
    execute
}