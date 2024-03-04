const { exec } = require("child_process");
const {exists, userHome} = require("./file");

function execute(command) {
    if (utools.isMacOS()) {
        if (exists('/bin/zsh') && exists(`${userHome()}/.zshrc`)) {
            exec(`PATH=$PATH:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin;${command}`, { shell: '/bin/zsh' }, (err) => {
                if (err) utools.showNotification(err.message);
            })
        } else {
            exec(`PATH=$PATH:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin;${command}`, (err) => {
                if (err) utools.showNotification(err.message);
            })
        }
    } else {
        exec(`${command}`, (err) => {
            if (err) utools.showNotification(err.message);
        })
    }
}

module.exports = {
    execute
}