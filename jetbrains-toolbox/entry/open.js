const {getIDEList} = require("../conf/ide");
const {exists} = require("../utils/file");

let installedIDEList = []

function getInstalledIDEList(searchWord) {
    // 如果项目列表不存在, 则查找本地文件
    if (!installedIDEList || installedIDEList.length === 0) {
        installedIDEList = getIDEList().filter(i => exists(i.exec))
    }

    if (!searchWord) {
        return installedIDEList;
    }

    return installedIDEList.filter(
        (i) => i.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
    );
}

module.exports = {
    getInstalledIDEList
}