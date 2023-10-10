const fs = require("fs");

const {historyFile} = require("../const/consts");
const {readFileContentToJson, exists, transformXml} = require("../utils/file");
const {getIDEByCode} = require("./ide");
const {getAllProjectOpenInfo} = require("../store/project");

// 仅支持win与mac
function getToolboxHistoryFile() {
    if (utools.isMacOS()) {
        return historyFile.mac;
    } else {
        return historyFile.win;
    }
}

function getLocalIdeaHistoryFile() {
    if (utools.isMacOS()) {
        let prefix = utools.getPath("home") + "/Library/Application Support/JetBrains/";
        let suffix = "/options/recentProjects.xml";
        let ideaDir = "";
        files = fs.readdirSync(prefix);
        // 只选取安装目录中的一个
        files.forEach(item => {
            if (item.startsWith("IntelliJIdea")) {
                ideaDir = item
            }
        })

        return prefix + ideaDir + suffix;
    } else {
        return null;
    }
}

function getProjectInfoList() {
    let projectInfoList = [];
    let file = getToolboxHistoryFile()
    if (exists(file)) {
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
    file = getLocalIdeaHistoryFile()
    if (exists(file)) {
        let recentInfo = transformXml(file);

        let projectOpenInfo = getAllProjectOpenInfo()
        for (let i =0; i < recentInfo.getElementsByTagName("entry").length; i++) {
            let projectPath = recentInfo.getElementsByTagName("entry")[i].attributes[0].nodeValue
            projectPath = projectPath.replace("$USER_HOME$", utools.getPath("home"))
            let projectName = projectPath.split("/")[projectPath.split("/").length - 1]

            let ide = getIDEByCode("IDEA-U-LOCAL");
            projectInfoList.push({
                name: projectName,
                title: projectName,
                path: projectName,
                description: projectPath,
                icon: ide.icon,
                exec: ide.exec,
                open: projectOpenInfo[projectName] ? parseInt(projectOpenInfo[projectName]) : 0
            });
        }
        // 返回并按照打开时间排序
        return projectInfoList;
    }
}

module.exports = {
    getProjectInfoList
}