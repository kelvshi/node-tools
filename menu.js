var fs = require("fs");
var path = require("path");
var basePath = "assets";
var idCount = 0;
var FileObj = {};
var menuObj = new Array();
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

	createMenu:function () {
		var self = this;
		self.searchDir(basePath);
		var dirObj = FileObj;
		for(var key in dirObj){
			menuObj.push(dirObj[key]);
		}
		self.findChildren(menuObj[0]);
		fs.writeFileSync("menu.json", JSON.stringify(menuObj[0], null, 4));
		console.log(JSON.stringify(menuObj[0], null, 4));
		self.generateMenu(JSON.stringify(menuObj[0], null, 4));
	},

	// 查询子元素的递归
	findChildren:function (item) {
		var self = this;
		var thisId = item.id;
		menuObj.forEach(function (value) {
			if(value.pid == thisId){
				// 判断是否有子元素，有继续往下，没有存下
				if(self.isHasParent(value)){
					self.findChildren(value);
				}
				if(!item.children){
					item.children = new Array();
				}
				item.children.push(value);
			}
		})
	},

	// 生产可用于本地的menu.js
	generateMenu:function (menuString) {
		var info = fs.readFileSync("./dist/files.tpl").toString();
		var files = info.replace("/**includeMenu**/", menuString);
		fs.writeFileSync("./dist/files.js", files);
	},

	isHasParent:function (item) {
		var flag = false;
		var thisId = item.id;
		menuObj.forEach(function (value) {
			if(value.pid == thisId){
				flag = true;
			}
		});
		return flag;
	}
}

DirList.createMenu();
module.exports = DirList;