const {historyFile} = require("../const/consts");
const {readFileContentToJson} = require("../utils/file");
const {getIDEByCode} = require("./ide");
const {getAllProjectOpenInfo} = require("../store/project");

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
    let projectOpenInfo = getAllProjectOpenInfo()
    list.forEach((l) => {
        let ide = getIDEByCode(l.defaultOpenItem.application_id);
        projectInfoList.push({
            name: l.name,
            title: l.name,
            path: l.path,
            description: l.path,
            icon: ide.icon,
            exec: ide.exec,
            open: projectOpenInfo[l.name] ? parseInt(projectOpenInfo[l.name]) : 0
        });
    });
    // 返回并按照打开时间排序
    return projectInfoList;
}

module.exports = {
    getProjectInfoList
}