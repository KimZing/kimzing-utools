const { getProjectInfoList } = require("../conf/project");
const {updateDBProjectOpenTime} = require("../store/project");

let projectList = [];

function initOrUpdateProjectList() {
  projectList = getProjectInfoList();
}

// 根据关键字获取历史项目
function getProjectList(searchWord) {
  if (!searchWord) {
    return projectList.sort((x,y) => y.open - x.open);
  }
  return projectList.filter(
    (project) =>
      project.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1 ||
      project.path.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
  ).sort((x,y) => y.open - x.open);
}

function updateProjectOpenTime(name) {
  let timestamp = new Date().valueOf()
  projectList.forEach((p) => {
    if (p.name === name) {
      p.open = timestamp;
    }
  });
  // 更新库
  updateDBProjectOpenTime(name, timestamp)
}

module.exports = {
  initOrUpdateProjectList,
  getProjectList,
  updateProjectOpenTime
};
