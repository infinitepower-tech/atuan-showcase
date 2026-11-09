# 部署说明（GitHub Pages）

静态站点，`main` 分支根目录直接发布：https://infinitepower-tech.github.io/atuan-showcase/

- `index.html`：INFINITE POWER AI 导航（首页 + AI 能做什么 / AI 是什么 / AI 怎么配）
- `atuan.html`：阿团互动展示（进入「AI 能做什么」时按需加载，自动播放鼠标引导演示）
- `assets/`：教程截图与品牌 logo
- `api-tutorial.html`：旧地址，自动跳到新教程页

源码与构建脚本在本地工程 `无限电网页开发/`：`uv run --with pillow python build/build.py` 生成 `dist/web/`，复制到本仓库根目录后推送即可。
