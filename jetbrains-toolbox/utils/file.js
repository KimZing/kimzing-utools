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

function transformXml(path){
    let parser = new DOMParser();
    xmlDoc = parser.parseFromString(fs.readFileSync(path).toString(),"text/xml");
    return xmlDoc;
}

module.exports = {
    exists, userHome, readFileContentToJson, transformXml
}


