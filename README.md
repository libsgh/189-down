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
- 可以在`main.js`中替换自己的ap地址
- 直接部署
  下载 https://github.com/libsgh/189-down/releases/  下载api程序
  设置环境变量
  ```
  $ vi /etc/profile
  # export cloud189_user=xxx
  # cloud189_password=xxx
  # access_token=找我获取
  $ source /etc/profile 
  ```
  解压
  ```
  $ echo
  $ nohup ./189-share-api -port=8080 &
  ```
- docker部署
  ```
  docker stop 189-share-api
  docker rm 189-share-api
  docker run -itd \
  --name 189-share-api \
  -d -p 8080:8080 \
  -e PORT=8080 \
  -e cloud189_user=xxx \
  -e cloud189_password=xxx \
  -e access_token=找我获取 \
  iicm/189-share-api:latest
  ```
- 试用授权token，有效期至2021-06-25
  `B6LXoFUmaPi8Rx6oyAafD1C+uKWKwE3M8pFBq2cApyinVs1UfZjIRms6PhVF4UPXvHL6nMzN6rge9FGTItrFhHvzylRMdgleFNzR6fgIUK600f+BJRXCVxQmkbQPPzgE9zPCaBShWEPsfRoOWc75ZKa0RE6uc5cYKuzc4PUx1UA=`

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
