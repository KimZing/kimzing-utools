module.exports = {
    get() {
        return {
            historyFile: {
                mac: `${utools.getPath("home")}/Library/Caches/JetBrains/Toolbox/intellij_projects.json`,
                win: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\cache\\intellij_projects.json`
            },
            softwares: [
                {
                    name: "AppCode",
                    code: "AppCode",
                    icon: "/base/icons/appcode.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/appcode`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\appcode.cmd`
                },
                {
                    name: "CLion",
                    code: "CLion",
                    icon: "/base/icons/clion.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/clion`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\clion.cmd`
                },
                {
                    name: "DataGrip",
                    code: "datagrip",
                    icon: "/base/icons/datagrip.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/datagrip`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\datagrip.cmd`
                },
                {
                    name: "GoLand",
                    code: "Goland",
                    icon: "/base/icons/goland.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/goland`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\goland.cmd`
                },
                {
                    name: "IntelliJ IDEA",
                    code: "IDEA-U",
                    icon: "/base/icons/intellij-idea.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/idea`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\idea.cmd`
                },
                {
                    name: "MPS",
                    code: "MPS",
                    icon: "/base/icons/mps.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/mps`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\mps.cmd`
                },
                {
                    name: "PhpStorm",
                    code: "PhpStorm",
                    icon: "/base/icons/phpstorm.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/phpstorm`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\phpstorm.cmd`
                },
                {
                    name: "PyCharm",
                    code: "PyCharm-P",
                    icon: "/base/icons/pycharm.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/pycharm`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\pycharm.cmd`
                },
                {
                    name: "Rider",
                    code: "Rider",
                    icon: "/base/icons/rider.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/rider`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\rider.cmd`
                },
                {
                    name: "RubyMine",
                    code: "RubyMine",
                    icon: "/base/icons/rubymine.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/rubymine`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\rubymine.cmd`
                },
                {
                    name: "Android Studio",
                    code: "AndroidStudio",
                    icon: "/base/icons/android-studio.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/studio`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\studio.cmd`
                },
                {
                    name: "WebStorm",
                    code: "WebStorm",
                    icon: "/base/icons/webstorm.png",
                    macExec: `${utools.getPath("home")}/Library/Application Support/JetBrains/Toolbox/scripts/webstorm`,
                    winExec: `${utools.getPath("home")}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\webstorm.cmd`
                }
            ]
        }
    }
};
