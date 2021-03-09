const html = `<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="UTF-8">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"/>
<meta name="renderer" content="webkit"/>
<meta name="force-rendering" content="webkit"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/libsgh/189-down@main/logo.ico">
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css"
  integrity="sha384-cLRrMq39HOZdvE0j6yBojO4+1PrHfB7a9l5qLcmRm/fiWXYY+CndJPmyu5FV/9Tw"
  crossorigin="anonymous"
/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/libsgh/189-down@main/main.css" />
<title>天翼云盘分享直链解析</title>
</head>
<body>
<div class="mdui-container">
<div class="mdui-row" style="margin-top: 100px">
	<div class="mdui-typo-display-1-opacity mdui-text-center">天翼云盘分享直链解析</div>
	<div class="mdui-typo-subheading-opacity mdui-text-center">若没有分享密码则无需填写</div>
	<div class="mdui-typo-subheading-opacity mdui-text-center">文件夹会先展示列表</div>
</div>
<div class="mdui-row">
  <div class="mdui-col-xs-9">
  	<div class="mdui-textfield mdui-textfield-floating-label">
	  <i class="mdui-icon material-icons">&#xe157;</i>
	  <label class="mdui-textfield-label">天翼云分享链接</label>
	  <input class="mdui-textfield-input" name="url" type="text"/>
	</div>
  </div>
  <div class="mdui-col-xs-3">
  	<div class="mdui-textfield mdui-textfield-floating-label">
	  <label class="mdui-textfield-label">分享密码</label>
	  <input class="mdui-textfield-input" name="passCode" type="text"/>
	</div>
  </div>
</div>
<div class="mdui-row">
  <div class="mdui-col-xs-12">
	  <button id="downBtn" class="mdui-btn mdui-btn-raised mdui-btn-block mdui-ripple mdui-color-indigo">立即下载</button>
  </div>
</div>
<div class="mdui-row">
	<ul class="mdui-list"></ul>
</div>
<div class="mdui-row" style="margin-top: 20px">
  <div class="mdui-divider"></div>
  <div class="mdui-text-center mdui-typo" style="margin-top: 10px">
  	Powered by <a href="https://github.com/libsgh/189-down" target="_blank">189-down</a> |
  	 Api by <a href="https://github.com/libsgh/PanIndex" target="_blank">PanIndex</a>
  </div>
</div>
</div>
<script
  src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js"
  integrity="sha384-gCMZcshYKOGRX9r6wbDrvF+TcCCswSHFucUzUPwka+Gr+uHgjlYvkABr95TCOz3A"
  crossorigin="anonymous"
></script>
<script src="https://cdn.jsdelivr.net/gh/libsgh/189-down@main/main.js"></script>
</body>
</html>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})