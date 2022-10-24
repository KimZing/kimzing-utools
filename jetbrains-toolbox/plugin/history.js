const fs = require("fs");
const config = require("./base/config");

function getIDEInfo(localHistory) {
    let ides = config.get().softwares.filter(s => s.code === localHistory.defaultOpenItem.application_id);
    if (!ides || !ides.length) {
        return {icon: "", exec: ""}
    }
    if (utools.isMacOS()) {
        return {icon: ides[0].icon, exec: ides[0].macExec};
    }
    if (utools.isWindows()) {
        return {icon: ides[0].icon, exec: ides[0].winExec};
    }
}

function getHistoryFile() {
    if (utools.isMacOS()) {
        return config.get().historyFile.mac;
    }
    if (utools.isWindows()) {
        return config.get().historyFile.win;
    }
}

module.exports = {
    getPlatformHistory() {
        // [{title description icon exec }] // 其中title为项目名称，description为项目路径
        let historys = [];

        let localHistorys = JSON.parse(fs.readFileSync(getHistoryFile()).toString());
        localHistorys.forEach((item) => {
            let ide = getIDEInfo(item)
            let history = {title: item.name, description: item.path, icon: ide.icon, exec: ide.exec};
            historys.push(history);
        });
        return historys;
    }
}