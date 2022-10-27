const config = require("./base/config");
const fs = require("fs");

module.exports = {
    getPlatformIDE() {
        let softwares = config.get().softwares
        if (utools.isMacOS()) {
            softwares = softwares.filter(s => fs.existsSync(s.macExec)).map(s => ({...s, title:s.name, description: s.macExec, exec: s.macExec}))
        }
        if (utools.isWindows()) {
            softwares = softwares.filter(s => fs.existsSync(s.winExec)).map(s => ({...s, title:s.name, description: s.winExec, exec: s.winExec}))
        }
        return softwares
    }
}