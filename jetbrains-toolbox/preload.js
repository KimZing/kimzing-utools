const {getProjectList} = require("./entry/project");
const {execute} = require("./utils/shell");
const {getInstalledIDEList} = require("./entry/open");

// 初始加载项目列表及IDE列表
utools.onPluginEnter(({code, type, payload}) => {
    getProjectList()
})

let History = {
    mode: "list",
    args: {
        enter: (action, callbackSetList) => {
            callbackSetList(getProjectList());
        },
        search: (action, searchWord, callbackSetList) => {
            return callbackSetList(getProjectList(searchWord));
        },
        select: (action, item) => {
            utools.hideMainWindow();
            let command = `"${item.exec}" "${item.description}"`;
            execute(command)
            utools.outPlugin();
        },
        placeholder: "搜索项目"
    },
};

let Open = {
    mode: "list",
    args: {
        enter: (action, callbackSetList) => {
            callbackSetList(getInstalledIDEList());
        },
        search: (action, searchWord, callbackSetList) => {
            return callbackSetList(getInstalledIDEList(searchWord));
        },
        select: (action, item) => {
            utools.hideMainWindow();
            let command = `"${item.exec}" "${action.payload[0].path}"`;
            execute(command)
            utools.outPlugin();
        },
        placeholder: "搜索IDE"
    },
};

window.exports = {
    History, Open
};
