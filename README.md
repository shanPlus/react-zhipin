## 项目src目录分析

- src 源代码文件
  - api ajax请求相关模块文件夹
  - assets 共用资源文件夹
  - components UI组件模块文件夹
  - containers 容器组件模块文件夹
    - home
      - Home 主页
    - login
      - Login 登录
    - register
      - Register 注册页面
  - redux redux相关模块文件夹
    - reducers
      - index.js 管理所有reducer
    - action_types.js 派发动作类型
    - actions.js 派发动作
    - store.js 状态管理中心
  - utils 工具模块文件夹
  - index.js 入口文件
  - App.jsx

  ## 下载模块
  - yarn add ant-mobile
  - yarn add babel-plugin-import react-app-rewired less less-loader customize-cra--dev

  ## 按需加载ant

  ```javascript
  // 新建文件: config-overrides.js
const { override, fixBabelImports, addLessLoader, } =require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
// 修改package.json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
  ```

  ## 引入路由

  - yarn add react-router-dom

  ## redux

  - yarn add redux react-redux redux-thunk
  - yarn add redux-devtools-extension --dev