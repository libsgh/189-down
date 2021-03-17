var $ = mdui.$;
var api = 'https://api.noki.top/pan/cloud189/shareToDown';
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
			'			<a href="javascript:redirectDown(\''+item.parentId+'\',\''+item.fileId+'\')">'+
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
		  url: api,
		  data: $.param({ url: $("input[name=url]").val(), passCode: $("input[name=passCode]").val(),fileId:fileId}),
		  success: function (data) {
		    if(isJSON(data)){
		    	var d = JSON.parse(data);
		    	initFiles(d, flag, d.parentId);
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
function redirectDown(fileId, subFileId){
	$.ajax({
		  method: 'GET',
		  url: api,
		  data: $.param({url: $("input[name=url]").val(), fileId: fileId, subFileId: subFileId, passCode: $("input[name=passCode]").val()}),
		  success: function (data) {
	    	location.href = data;
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