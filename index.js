const html = `<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="UTF-8">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"/>
<meta name="renderer" content="webkit"/>
<meta name="force-rendering" content="webkit"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<link rel="shortcut icon" href="https://cloud.189.cn/logo.ico">
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css"
  integrity="sha384-cLRrMq39HOZdvE0j6yBojO4+1PrHfB7a9l5qLcmRm/fiWXYY+CndJPmyu5FV/9Tw"
  crossorigin="anonymous"
/>
<style>
	.mdui-appbar .mdui-toolbar{
		height:56px;
		font-size: 16px;
	}
	.mdui-toolbar>*{
		padding: 0 6px;
		margin: 0 2px;
		opacity:0.5;
	}
	.mdui-toolbar>.mdui-typo-headline{
		padding: 0 16px 0 0;
	}
	.mdui-toolbar>i{
		padding: 0;
	}
	.mdui-toolbar>a:hover,a.mdui-typo-headline,a.active{
		opacity:1;
	}
	.mdui-container{
		max-width:980px;
	}
	.mdui-list-item{
		-webkit-transition:none;
		transition:none;
	}
	.mdui-list>.th{
		background-color:initial;
	}
	.mdui-list-item>a{
		width:100%;
		line-height: 48px
	}
	.mdui-list-item{
		margin: 2px 0px;
		padding:0;
	}
	.mdui-toolbar>a:last-child{
		opacity:1;
	}
	@media screen and (max-width:980px){
		.mdui-list-item .mdui-text-right{
			display: none;
		}
		.mdui-container{
			width:100% !important;
			margin:0px;
		}
		.mdui-toolbar>*{
			display: none;
		}
		.mdui-toolbar>a:last-child,.mdui-toolbar>.mdui-typo-headline,.mdui-toolbar>i:first-child{
			display: block;
		}
	}
</style>
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
<script type="text/javascript">
var $ = mdui.$;
$("#downBtn").on('click', function (e) {
	getFolder("", false, "");
});
function initFiles(d, flag, pId){
	var initHtml = '<li class="mdui-list-item th">'+
	'		  <div class="mdui-col-xs-12 mdui-col-sm-7">文件 <i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="downward">expand_more</i></div>'+
	'		  <div class="mdui-col-sm-3 mdui-text-right">修改时间 <i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i></div>'+
	'		  <div class="mdui-col-sm-2 mdui-text-right">大小 <i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i></div>'+
	'</li>';
	if(flag){
		initHtml+='<li class="mdui-list-item mdui-ripple">'+
		'			<a href="javascript:getFolder(\''+pId+'\', true, \'\')">'+
		'			  <div class="mdui-col-xs-12 mdui-col-sm-7">'+
		'				<i class="mdui-icon material-icons">arrow_upward</i>'+
		'		    	..'+
		'			  </div>'+
		'			  <div class="mdui-col-sm-3 mdui-text-right"></div>'+
		'			  <div class="mdui-col-sm-2 mdui-text-right"></div>'+
		'		  	</a>'+
		'		</li>';
	}
	$.each(d.data, function(i, item){
		if(item.isFolder){
			initHtml += '<li class="mdui-list-item mdui-ripple">'+
			'			<a href="javascript:getFolder(\''+item.fileId+'\', true, \''+item.parentId+'\')">'+
			'			  <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">'+
			'				<i class="mdui-icon material-icons">folder_open</i>'+
			'		    	'+item.fileName+
			'			  </div>'+
			'			  <div class="mdui-col-sm-3 mdui-text-right">'+item.lastOpTime+'</div>'+
			'			  <div class="mdui-col-sm-2 mdui-text-right">'+formatFileSize(item.fileSize)+'</div>'+
			'		  	</a>'+
			'		</li>';
		}else{
			initHtml += '<li class="mdui-list-item mdui-ripple">'+
			'			<a href="'+item.downloadUrl+'">'+
			'			  <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">'+
			'				<i class="mdui-icon material-icons">insert_drive_file</i>'+
			'		    	'+item.fileName+
			'			  </div>'+
			'			  <div class="mdui-col-sm-3 mdui-text-right">'+item.lastOpTime+'</div>'+
			'			  <div class="mdui-col-sm-2 mdui-text-right">'+formatFileSize(item.fileSize)+'</div>'+
			'		  	</a>'+
			'		</li>';
		}
	});
	$("ul").html(initHtml);
}
function getFolder(fileId, flag, pId){
	var url = $("input[name=url]").val();
	var passCode = $("input[name=url]").val();
	if(url == ""){
		mdui.snackbar({
		  message: '您还没有输入分享链接！'
		});
	}
	$.ajax({
		  method: 'GET',
		  url: 'https://pan.noki.top/api/shareToDown',
		  data: $.param({ url: $("input[name=url]").val(), passCode: $("input[name=passCode]").val(),fileId:fileId}),
		  success: function (data) {
		    if(isJSON(data)){
		    	var d = JSON.parse(data);
		    	initFiles(d, flag, pId);
		    }else{
		    	if(data == "https://cloud.189.cn/"){
		    		mdui.snackbar({
	    			  message: '请输入正确的分享链接和密码！'
	    			});
		    	}else{
			    	location.href = data;
		    	}
		    }
		  }
		});
}
function isJSON(str) {
    if (typeof str == 'string') {
        try {
            JSON.parse(str);
            return true;
        } catch(e) {
            return false;
        }
    }
}
function formatFileSize(fileSize) {
	if(fileSize == 0){
		return "-";
	}
    if (fileSize < 1024) {
        return fileSize + 'B';
    } else if (fileSize < (1024*1024)) {
        var temp = fileSize / 1024;
        temp = temp.toFixed(2);
        return temp + 'KB';
    } else if (fileSize < (1024*1024*1024)) {
        var temp = fileSize / (1024*1024);
        temp = temp.toFixed(2);
        return temp + 'MB';
    } else {
        var temp = fileSize / (1024*1024*1024);
        temp = temp.toFixed(2);
        return temp + 'GB';
    }
}
</script>
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