# 189-down
天翼云网盘分享直链解析，支持目录

demo：[Github Pages版本](https://pan-189.tk/)
[cf workers版本](https://pan.noki.workers.dev/)

### 食用方法：
1. fork本项目
2. 开启Github Pages
3. 绑定域名（可选）
4. enjoy it!
> cf-workers也是可以部署的,复制[index.js](https://cdn.jsdelivr.net/gh/libsgh/189-down@main/index.js)

### 接口说明

- ~~接口源自隔壁：[PanIndex](https://github.com/libsgh/PanIndex)~~
- 由于PanIndex支持多网盘模式，接口可能会失效，所以我将接口独立了出来

	```
	https://api.noki.top/pan/cloud189/shareToDown
	```
- 可以在`main.js`中替换自己的api地址，具体接口参数返回值，请查看源码

### 测试分享链接
* 无密码文件

  - 链接：https://cloud.189.cn/t/aQjy6nBfUZJf
* 密码文件

  - 链接：https://cloud.189.cn/t/6zIBFnA32M3u

  - 访问码：8h2j
* 无密码文件夹

  - 链接：https://cloud.189.cn/t/NbeiEfBzqee2
* 密码文件夹

  - 链接：https://cloud.189.cn/t/EJbeIf2In6zq

  - 访问码：6lrv

### TODO List

- [x] 支持更多网盘
