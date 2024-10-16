# 小do前端项目

## 推荐开发环境

使用 vscode 作为开发环境，安装以下插件：

- Vue-Offical: 主要用于Vue语法高亮

## 自定义配置

Vite 的配置文件位于 `vite.config.js`，具体配置项请参考 [Vite Configuration Reference](https://vitejs.dev/config/).

## 项目配置和安装依赖

考虑先换源，国内镜像比较快：

    npm config set registry=https://registry.npmmirror.com

然后安装依赖：

    npm install

第一次安装依赖时，需要下载大量 npm 包，请耐心等待。

### 编译和使用开发用的热启动

```sh
npm run dev
```

### 编译和打包生产环境

```sh
npm run build
```
