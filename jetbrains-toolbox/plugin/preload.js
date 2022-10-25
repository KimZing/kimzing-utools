const {exec} = require("child_process");
const {getPlatformHistory} = require("./history")
const {getPlatformIDE} = require("./ide")

utools.onPluginReady(() => {});

function getHistory(searchWord) {
    let historys = getPlatformHistory()

    if (!searchWord) {
        return historys;
    }

    return historys.filter(
        (x) =>
            x.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1 ||
            x.description.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
    )
}

function getIDE(searchWord) {
    let ides = getPlatformIDE()
    if (!searchWord) {
        return ides;
    }

    return ides.filter(
        (x) => x.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
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

        select: (action, item) => {
            let command = `"${item.exec}" "${item.description}"`;
            exec(command, (err) => {
                if (err) utools.showNotification("不是有效的可执行程序");
            });

            utools.outPlugin();
            utools.hideMainWindow();
        },
    },
};

let Open = {
    mode: "list",
    args: {
        enter: (action, callbackSetList) => {
            callbackSetList(getIDE());
        },
        search: (action, searchWord, callbackSetList) => {
            return callbackSetList(getIDE(searchWord));
        },
        select: (action, item) => {
            let command = `"${item.exec}" "${action.payload[0].path}"`;
            exec(command, (err) => {
                if (err) utools.showNotification("不是有效的可执行程序");
            });
            utools.outPlugin();
            utools.hideMainWindow();
        },
    },
};

window.exports = {
    History,Open
};
