const dbKey = utools.isMacOS() ? "mac:project" : "win:project"

function updateDBProjectOpenTime(projectName, timestamp) {
    let result = utools.db.get(dbKey);
    if (!result) {
        result = {_id: dbKey, value: {}}
    }
    result.value[projectName] = timestamp
    utools.db.put(result)
}

function getAllProjectOpenInfo() {
    let result = utools.db.get(dbKey);
    if (!result) {
        return {}
    } else {
        return result.value
    }
}

module.exports = {
    updateDBProjectOpenTime, getAllProjectOpenInfo
}