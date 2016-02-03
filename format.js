var fs = require("fs");
var path = require("path");
var basePath = "./";
var dirObj = {};
var dirPath = "./dirlist.json";
if(fs.existsSync(dirPath)){
	dirObj = require(dirPath);
}

var menuObj = new Array();

// 读取文件目录信息的函数
var Format = {
	createMenu:function () {
		var self = this;
		for(var key in dirObj){
			menuObj.push(dirObj[key]);
		}
		self.findChildren(menuObj[0]);
		fs.writeFileSync("menu.json", JSON.stringify(menuObj[0], null, 4));
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
// Format.createMenu();
module.exports = Format;