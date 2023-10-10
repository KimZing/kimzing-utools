# JetBrains Toolbox

> 如果该插件对你有帮助的话，请作者喝杯☕️吧

## 插件介绍

> 必须安装JetBrains Toolbox，且使用Toolbox安装IDE，安装位置采用默认安装，切勿修改，否则该插件无法正常工作

打开JetBrains系列IDE的项目列表

## 功能特点

1. 支持Mac、Windows系统平台
2. 内置默认配置信息，无需配置(须采用默认安装方式)
3. 通过`["History","JetBrains","Toolbox"]`等关键字即可快速显示项目列表，选择项目即可使用对应IDE进行打开
4. 支持[AppCode CLion DataGrip GoLand IntelliJ IDEA MPS PhpStorm PyCharm Rider RubyMine Android Studio WebStorm]等IDE
5. 选中项目文件夹，可通过超级面板中的选项`JetBrains中打开`使用指定IDE打开

## 使用技巧

1. 超级面板：导航到[偏好设置-我的插件应用-JetBrains Toolbox]，选择你喜欢的关键字，添加到超级面板，使用超级面板快速打开项目列表页
2. 快捷按键：导航到[偏好设置-偏好设置-全局快捷键]，添加快捷键映射，如{"双击Command": "JetBrains"},使用该快捷键即可快速打开项目列表页

## 规划功能

1. 提供设置页面，支持自定义Toolbox的安装位置及各个IDE的安装目录

## 注意事项

1. 首次打开插件会扫描本地项目列表，略微延迟属于正常现象
2. 首次安装Toolbox后，需重启电脑，否则可能会导致该插件命令不生效
3. 仅支持通过Toolbox安装的IDE，非Toolbox安装的IDE历史项目可以检索，但无法打开
4. 如果安装了相同IDE的多个版本，则采用Toolbox中配置的默认IDE版本
5. 当使用IDE打开新的项目时，Toolbox中的列表更新会延迟，重新打开Toolbox或重启电脑后，会自动更新

## 更新日志

### v1.0.0

1. [Feature]   支持MAC平台
2. [Feature]   支持JetBrains Toolbox安装的IDE打开的项目(默认安装路径)
3. [Feature]   IDE支持列表：Idea、Goland、DataGrip、WebStorm

### v1.0.1

1. [Feature]   添加对windows平台JetBrains Toolbox的支持
2. [Feature]   添加更多IDE支持：AppCode CLion DataGrip GoLand IntelliJ IDEA MPS PhpStorm PyCharm Rider RubyMine Android Studio WebStorm
3. [Refactor]  对项目结构进行了整理，便于多平台扩展

### v1.0.2

1. [功能]   超级面板(JetBrains中打开)：使用已安装的IDE打开指定文件夹(项目)
2. [优化]   为搜索框增加icon

### v1.0.3

1. [功能]   增加IDE历史项目排序功能，根据项目打开的时间倒序排序
2. [性能]   缓存项目列表，并提供自动更新，提高打开项目列表的速度
3. [优化]   重构整体项目结构

### v1.0.4

1. [功能]   增加对独立安装的Intellij Idea的支持。如果安装了Toolbox, 则优先使用Toolbox的历史项目和IDE

## 参考项目

[utools-jetbrains-history](https://github.com/marsvet/uTools-plugins/tree/master/utools-jetbrains-history)