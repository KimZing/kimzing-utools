const {getProjectInfoList} = require("../conf/project");

let projectList = []

function initOrUpdateProjectList() {
    projectList = getProjectInfoList()
}

// 根据关键字获取历史项目
function getProjectList(searchWord) {
    if (!searchWord) {
        return projectList;
    }
    return projectList.filter(
        (project) =>
            project.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1 ||
            project.path.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
    );
}

module.exports = {
    initOrUpdateProjectList, getProjectList
}