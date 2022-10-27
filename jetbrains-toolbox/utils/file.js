const fs = require("fs");

function exists(path) {
    return fs.existsSync(path);
}

function userHome() {
    return utools.getPath("home")
}

function readFileContentToJson(path) {
    return JSON.parse(fs.readFileSync(path).toString())
}

module.exports = {
    exists, userHome, readFileContentToJson
}


