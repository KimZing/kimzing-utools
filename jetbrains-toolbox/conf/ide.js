const {ideList} = require("../const/consts");
const {exists} = require("../utils/file");

function getIDEByCode(code) {
    let list = ideList.filter(i => i.code.toLowerCase() === code.toLowerCase())
    if (!list || list.length === 0) {
        return {icon: "", exec: ""}
    }
    let ide = list[0]
    if (utools.isMacOS()) {
        return {icon: ide.icon, exec: ide.macExec};
    } else {
        return {icon: ide.icon, exec: ide.winExec};
    }
}


function getIDEList() {
    let list = []
    if (utools.isMacOS()) {
        list = ideList.map(s => ({
            icon: s.icon,
            name: s.name,
            title: s.name,
            exec: s.macExec,
            description: s.macExec
        }))
    } else {
        list = ideList.map(s => ({
            icon: s.icon,
            name: s.name,
            title: s.name,
            exec: s.winExec,
            description: s.winExec
        }))
    }
    return list;
}

module.exports = {
    getIDEByCode, getIDEList
}
