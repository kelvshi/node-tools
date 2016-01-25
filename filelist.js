var fs = require("fs");
var path = require("path");
var basePath = "./assets";
var FileObj = {};
// 读取文件目录信息的函数
var FileList = {
	searchDir: function (pth) {
		var self = this;
		fs.readdir(pth, function (err, files) {
			var parentPath = path.dirname(pth);
			// parentPath = path.basename(parentPath);
			// var keyPath = path.basename(pth);
			var keyPath = pth;
			FileObj[keyPath] = {};
			FileObj[keyPath].pid = parentPath;
			FileObj[keyPath].children = new Array();
			FileObj[keyPath].covers = new Array();
			if(err){
				console.error(err);
			}else{
				// 遍历,存储文件信息
				files.forEach(function (item) {
					var nowPath = path.join(pth, item);
					var infor = fs.statSync(nowPath);
					var flag = infor.isDirectory();
					if(flag){
						FileObj[keyPath].children.push(item);
						self.searchDir(nowPath);
					}else{
						FileObj[keyPath].covers.push(item);
					}
				});
				fs.writeFileSync("./result.json", JSON.stringify(FileObj, null, 4));
			}
		});
	}
}
FileList.searchDir(basePath);
module.exports = FileList;