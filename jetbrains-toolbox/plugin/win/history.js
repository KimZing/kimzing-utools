const fs = require("fs");
const config = require("../base/config");

function getIDEInfo(localHistory) {
    let ides = config.get().softwares.filter(s => s.code === localHistory.defaultOpenItem.application_id);
    if (!ides || !ides.length) {
        return {icon: "", macExec: "", winExec: ""}
    }
    return ides[0]
}

module.exports = {
    getWinHistory() {
        // [{title description icon exec }] // 其中title为项目名称，description为项目路径
        let historys = [];

        let localHistorys = JSON.parse(fs.readFileSync(config.get().historyFile.win).toString());
        localHistorys.forEach((item) => {
            let ide = getIDEInfo(item)
            let history = {title: item.name, description: item.path, icon: ide.icon, exec: ide.winExec};
            historys.push(history);
        });
        return historys;
    }
}