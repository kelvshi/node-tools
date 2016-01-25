var fs = require("fs");
var path = require("path");
var basePath = "./";
var FileObj = {};
var FilePath = "./result.json";
if(fs.existsSync(FilePath)){
	FileObj = require(FilePath);
}

// 读取文件目录信息的函数
var Format = {
	createMenu:function () {
		console.log(FileObj);
	}
}
Format.createMenu();
module.exports = Format;