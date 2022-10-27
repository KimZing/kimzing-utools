const {get, put} = require("../utils/db");

const dbKey = utools.isMacOS() ? "mac:project" : "win:project"

function initProjectOpenTime() {
    let current = get(dbKey)
    if (!current) {
        put(dbKey, {}, null)
    }
}

function updateProjectOpenTime(projectName) {
    let current = get(dbKey);
    current.value[projectName] = new Date().valueOf()
    put(dbKey, current.value, current._rev)
}

module.exports = {
    initProjectOpenTime, updateProjectOpenTime, dbKey
}