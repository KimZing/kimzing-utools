module.exports = {
    get() {
        return {
            historyFile: {
                mac: `${utools.getPath("home")}/Library/Caches/JetBrains/Toolbox/intellij_projects.json`,
                win: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\cache\\intellij_projects.json`
            },
            softwares: [
                {
                    name: "IntelliJ IDEA",
                    code: "IDEA-U",
                    icon: "/base/icons/intellij-idea.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/idea`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\idea`
                },
                {
                    name: "WebStorm",
                    code: "WebStorm",
                    icon: "/base/icons/webstorm.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/webstorm`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\webstorm`
                },
                {
                    name: "GoLand",
                    code: "Goland",
                    icon: "/base/icons/goland.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/goland`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\goland`
                },
                {
                    name: "DataGrip",
                    code: "datagrip",
                    icon: "/base/icons/datagrip.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/datagrip`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\datagrip`
                }
            ]
        }
    }
};
