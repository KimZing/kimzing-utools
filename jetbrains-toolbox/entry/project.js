const {getProjectInfoList} = require("../conf/project");

let projectList = []

// 根据关键字获取历史项目
function getProjectList(searchWord) {
    // 如果项目列表不存在, 则查找本地文件
    if (!projectList || projectList.length === 0) {
        projectList = getProjectInfoList()
    }

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
    getProjectList
}