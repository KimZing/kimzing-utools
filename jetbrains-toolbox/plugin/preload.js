const fs = require("fs");
const { execFile } = require("child_process");
const softwares = require("./mac/softwares");

utools.onPluginReady(() => {});

function getHistory() {
  let allHistory = [];
  // [{title description icon exec }]
  let toolboxHistorys = JSON.parse(
    fs
      .readFileSync(
        utools.getPath("home") +
          "/Library/Caches/JetBrains/Toolbox/intellij_projects.json"
      )
      .toString()
  );
  fs.writeFile;
  toolboxHistorys.forEach((toolboxHistory, index) => {
    let history = {};
    history.title = toolboxHistory.name;
    history.description = toolboxHistory.path;

    let software = softwares[toolboxHistory.defaultOpenItem.application_id];
    history.icon = software.icon;
    history.exec = software.exec;
    allHistory.push(history);
  });
  return allHistory;
}

let History = {
  mode: "list",
  args: {
    enter: (action, callbackSetList) => {
      getHistory();
      callbackSetList(getHistory());
    },

    search: (action, searchWord, callbackSetList) => {
      if (!searchWord) return callbackSetList(getHistory());
      return callbackSetList(
        getHistory().filter(
          (x) =>
            x.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1 ||
            x.description.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
        )
      );
    },

    select: (action, itemData) => {
      execFile(
        utools.getPath("home") + itemData.exec,
        [itemData.description],
        (err) => {
          if (err) utools.showNotification("不是有效的可执行程序");
        }
      ); // 这种命令必须异步执行

      utools.outPlugin();
      utools.hideMainWindow();
    },
  },
};

window.exports = {
  History,
};
