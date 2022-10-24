module.exports = {
    get() {
        return {
            historyFile: {
                mac: `${utools.getPath("home")}/Library/Caches/JetBrains/Toolbox/intellij_projects.json`,
                win: `${utools.getPath("home")}`
            },
            softwares: [
                {
                    name: "IntelliJ IDEA",
                    code: "IDEA-U",
                    icon: "/base/icons/intellij-idea.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/idea`,
                    winExec: ""
                },
                {
                    name: "WebStorm",
                    code: "WebStorm",
                    icon: "/base/icons/webstorm.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/webstorm`,
                    winExec: ""
                },
                {
                    name: "GoLand",
                    code: "Goland",
                    icon: "/base/icons/goland.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/goland`,
                    winExec: ""
                },
                {
                    name: "DataGrip",
                    code: "datagrip",
                    icon: "/base/icons/datagrip.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/datagrip`,
                    winExec: ""
                }
            ]
        }
    }
};
