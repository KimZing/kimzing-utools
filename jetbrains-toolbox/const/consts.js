const {userHome} = require("../utils/file");

let home = userHome()

module.exports = {
    historyFile: {
        mac: `${home}/Library/Caches/JetBrains/Toolbox/intellij_projects.json`,
        win: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\cache\\intellij_projects.json`
    },
    ideList: [
        {
            name: "AppCode",
            code: "AppCode",
            icon: "/assets/icons/appcode.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/appcode`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\appcode.cmd`
        },
        {
            name: "CLion",
            code: "CLion",
            icon: "/assets/icons/clion.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/clion`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\clion.cmd`
        },
        {
            name: "DataGrip",
            code: "datagrip",
            icon: "/assets/icons/datagrip.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/datagrip`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\datagrip.cmd`
        },
        {
            name: "GoLand",
            code: "Goland",
            icon: "/assets/icons/goland.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/goland`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\goland.cmd`
        },
        {
            name: "IntelliJ IDEA",
            code: "IDEA-U",
            icon: "/assets/icons/intellij-idea.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/idea`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\idea.cmd`
        },
        {
            name: "MPS",
            code: "MPS",
            icon: "/assets/icons/mps.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/mps`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\mps.cmd`
        },
        {
            name: "PhpStorm",
            code: "PhpStorm",
            icon: "/assets/icons/phpstorm.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/phpstorm`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\phpstorm.cmd`
        },
        {
            name: "PyCharm",
            code: "PyCharm-P",
            icon: "/assets/icons/pycharm.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/pycharm`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\pycharm.cmd`
        },
        {
            name: "Rider",
            code: "Rider",
            icon: "/assets/icons/rider.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/rider`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\rider.cmd`
        },
        {
            name: "RubyMine",
            code: "RubyMine",
            icon: "/assets/icons/rubymine.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/rubymine`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\rubymine.cmd`
        },
        {
            name: "Android Studio",
            code: "AndroidStudio",
            icon: "/assets/icons/android-studio.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/studio`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\studio.cmd`
        },
        {
            name: "WebStorm",
            code: "WebStorm",
            icon: "/assets/icons/webstorm.png",
            macExec: `${home}/Library/Application Support/JetBrains/Toolbox/scripts/webstorm`,
            winExec: `${home}\\AppData\\Local\\JetBrains\\Toolbox\\scripts\\webstorm.cmd`
        }
    ]
};
