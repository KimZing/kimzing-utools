const {historyFile} = require("../const/consts");
const {readFileContentToJson} = require("../utils/file");
const {getIDEByCode} = require("./ide");

// 仅支持win与mac
function getHistoryFile() {
    if (utools.isMacOS()) {
        return historyFile.mac;
    } else {
        return historyFile.win;
    }
}

function getProjectInfoList() {
    let projectInfoList = [];
    let file = getHistoryFile()

    let list = readFileContentToJson(file);
    list.forEach((l) => {
        let ide = getIDEByCode(l.defaultOpenItem.application_id);
        projectInfoList.push({
            name: l.name,
            title: l.name,
            path: l.path,
            description: l.path,
            icon: ide.icon,
            exec: ide.exec
        });
    });
    return projectInfoList;
}

module.exports = {
    getProjectInfoList
}