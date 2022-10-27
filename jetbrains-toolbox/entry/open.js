const {getIDEList} = require("../conf/ide");
const {exists} = require("../utils/file");

let installedIDEList = []

function initOrUpdateInstalledIDEList() {
    installedIDEList = getIDEList().filter(i => exists(i.exec))
}

function getInstalledIDEList(searchWord) {
    if (!searchWord) {
        return installedIDEList;
    }

    return installedIDEList.filter(
        (i) => i.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
    );
}

module.exports = {
    initOrUpdateInstalledIDEList, getInstalledIDEList
}