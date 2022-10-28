const {initOrUpdateProjectList, getProjectList, updateProjectOpenTime} = require("./entry/project");
const {execute} = require("./utils/shell");
const {initOrUpdateInstalledIDEList, getInstalledIDEList} = require("./entry/open");

// 初始加载项目列表及IDE列表, 插件生命周期中仅会调用一次
utools.onPluginReady(() => {
    initOrUpdateProjectList()
    initOrUpdateInstalledIDEList()
})

let History = {
    mode: "list",
    args: {
        // 每次进入插件都会调用
        enter: (action, callbackSetList) => {
            callbackSetList(getProjectList());
            // 异步更新项目列表
            setTimeout(() => {
                initOrUpdateProjectList()
            }, 5000);
        },
        search: (action, searchWord, callbackSetList) => {
            return callbackSetList(getProjectList(searchWord));
        },
        select: (action, item) => {
            utools.hideMainWindow();
            let command = `"${item.exec}" "${item.description}"`;
            execute(command)
            // 更新项目打开时间，并更新项目列表以重新排序
            updateProjectOpenTime(item.name)
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
            // 异步更新IDE列表
            setTimeout(() => {
                initOrUpdateInstalledIDEList()
            }, 5000);
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
