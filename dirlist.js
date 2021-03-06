var fs = require("fs");
var path = require("path");
var format = require("./format");
var basePath = "assets";
var idCount = 0;
var FileObj = {};
// 读取文件目录信息的函数
var DirList = {
	searchDir: function (pth) {
		var self = this;
		FileObj[pth] = {
			id: idCount++,
			name: path.basename(pth),
			path: pth.replace(/\\/g,"/")
		}
		var parent = path.dirname(pth);
		if(!FileObj[pth].pid){
			if(FileObj[parent] && typeof FileObj[parent].id !=="undefined"){
				FileObj[pth].pid = FileObj[parent].id;
			}
		}
		if(!FileObj[pth].covers){
			FileObj[pth].covers = new Array();
		}
		var files = fs.readdirSync(pth);
		files.forEach(function (item) {
			var nowPath = path.join(pth, item);
			var infor = fs.statSync(nowPath);
			var flag = infor.isDirectory();
			if(flag){
				self.searchDir(nowPath);
			}else{
				FileObj[pth].covers.push(item);
			}
		});
		// fs.readdir(pth, function (err, files) {
		// 	if(err){
		// 		console.error(err);
		// 	}else{
		// 		// 遍历,存储文件信息
		// 		files.forEach(function (item) {
		// 			var nowPath = path.join(pth, item);
		// 			var infor = fs.statSync(nowPath);
		// 			var flag = infor.isDirectory();
		// 			if(flag){
		// 				self.searchDir(nowPath);
		// 			}else{
		// 				FileObj[pth].covers.push(item);
		// 			}
		// 		});
		// 		fs.writeFileSync("./dirlist.json", JSON.stringify(FileObj, null, 4));
		// 		// format.createMenu();
		// 	}
		// });
	},
}
DirList.searchDir(basePath);
module.exports = DirList;