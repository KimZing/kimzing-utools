// 添加或更新
function put(key, value, version) {
    utools.db.put({_id: key, value, _rev: version})
}

function get(key) {
    return utools.db.get(key)
}

module.exports = {
    put, get
}
