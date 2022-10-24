const {execFile} = require("child_process");
const {getMacHistory} = require("./mac/history")
const {getWinHistory} = require("./win/history")

utools.onPluginReady(() => {
});

function getHistory(searchWord) {
    let historys = []
    if (utools.isMacOS()) {
        historys = getMacHistory();
    }
    if (utools.isWindows()) {
        historys = getWinHistory();
    }

    if (!searchWord) {
        return historys;
    }

    return historys.filter(
        (x) =>
            x.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1 ||
            x.description.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
    )
}

let History = {
    mode: "list",
    args: {
        enter: (action, callbackSetList) => {
            callbackSetList(getHistory());
        },

        search: (action, searchWord, callbackSetList) => {
            return callbackSetList(getHistory(searchWord));
        },

        select: (action, itemData) => {
            utools.hideMainWindow();
            execFile(
                itemData.exec,
                [itemData.description],
                (err) => {
                    if (err) utools.showNotification("不是有效的可执行程序");
                }
            );
            utools.outPlugin();
        },
    },
};

window.exports = {
    History,
};
