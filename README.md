# vue-components

> A Vue.js project

## 添加新组件开发步骤

1. 在components目录下新建目录，目录名为组件名 (注意使用pascal命名方式：HelloWorld)
2. 在data/components.js文件中配置对象：{ name: 'ComponentName', zhName: '组件中文名' },
3. 在新创建的组件目录中添加组件文件 (注意：name属性使用`v-组件名`的形式，如果整个组件只由一个文件组成，文件名使用index.vue)
4. 在组件目录下添加docs目录，并添加api.md、code.md和index.vue文件，index.vue用来预览组件效果
5. 在router/routes.doc.js文件中引入docs/index.vue文件，并添加路由配置 (此时可以开始查看组件效果，路径为：#/componentName)
6. 组件绘制完成后，编写api.md和code.md文件，code.md中的内容直接拷贝index.vue，并修改import from (具体参考现有组件，不包含样式)
7. 若组件有插件用法(可以通过Vue.use来注册)，在组件目录下添加plugins目录，写组件插件用法

**PS: 组件预览路径：`#/componentName`，说明文档路径：`#/doc/componentName`**

## 项目中的全局对象

* $config (包含项目的通用配置数据，数据配置文件为 src/data/config/*.env.js)

## pre-commit eslint

该项目默认启用 eslint 进行 js 代码语法检查，检查不通过时将出现以下现象：

* 开发环境代码运行报错
* git commit 无法提交成功

当你执行 git commit 时，会在代码提交之前先执行 eslint 校验 src 目录下变更过的 js 或 vue 文件，为了提高执行速率，未变更的文件不会再次校验，如果 eslint 语法检查不通过，将会阻止本次提交。

如果你非要强制提交代码，可以使用 `git commit --no-verify` (强烈不推荐，因为这样你提交的代码在团队其他成员 pull 时，会报出一大堆错误，应当确保只有在 eslint 校验成功，但出现其他未知异常导致代码无法正常提交时，才使用该选项)

如果想定制 eslint 校验规则，修改 .eslintrc.js 文件

如果你的项目不想使用 eslint，将 config/index.js 文件中的 base.useEslint 设置为 false 即可 (推荐启用 eslint)

**注意：windows 系统 npm 安装 pre-commit 插件时，可能会由于权限原因，无法在 .git/hooks 目录中生成新的 pre-commit 文件，此时需要以管理员身份运行 cmd.exe，执行 `node ./node_modules/pre-commit/install.js` 就 OK 了。**

## Build Setup

```bash
# install dependencies
yarn

# 安装 phantomjs-prebuilt 经常报错，常常需要切换镜像源 (以下3个源哪个正常用哪个)
# yarn config set phantomjs_cdnurl https://bitbucket.org/ariya/phantomjs/downloads
# yarn config set phantomjs_cdnurl https://cnpmjs.org/downloads
# yarn config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs

# 安装 node-sass 也很容易报错，通常换成淘宝镜像就好了
# yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass

# 安装 chromedriver 也会报错，源镜像被墙了，换成淘宝镜像
# yarn config set chromedriver_cdnurl https://npm.taobao.org/mirrors/chromedriver

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
