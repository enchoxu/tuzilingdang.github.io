var fs = require("fs");
var path = require("path");
var tinify = require("tinify");
tinify.key = "vJ53kGoVkOJ8bwlxt0qk3oxzThs8QDDh";

const SRC_PATH = "/Users/april/Study/Blog/public/src-img";
const DIS_PATH = "/Users/april/Study/Blog/public/dis-img";

var root = path.join(SRC_PATH);
readDirSync(root);

function readDirSync(path) {
    var dirList = fs.readdirSync(path);

    dirList.forEach(function(ele) {
        var stat = fs.stat(path + "/" + ele, function(err, stat) {
            if(err === null ) {
               if (stat.isDirectory()) {
                   // console.log("Directory:" + ele);
                   readDirSync(path + "/" + ele);
                   var disDirPath = path.replace(SRC_PATH, DIS_PATH);
                   makeDir(disDirPath, ele);
               } else {
                   // console.log("file name:" + path+ "/" + ele);
                   tinyImg(path + "/" + ele);
               }
               debugger; 
            }
            else if (err.code == 'ENOENT') {
                console.log("路径不存在");
            }
            else {
                console.log('读取路径出错：' + err);
            }
        });

    });
}

function makeDir(dirPath, dirName) {
    fs.stat( dirPath + "/" + dirName,  function(err, stat) {
        if(err === null) {
            fs.rmdirSync(dirPath + "/" + dirName);
        }
        else if (err.code == 'ENOENT') {
            fs.mkdirSync(dirPath + "/" + dirName);
        }
        else {
            console.log('路径出错：' + err);
        }
    });
    
}

function tinyImg(filePath) {
    var source = tinify.fromFile(filePath);
    var disFilePath = filePath.replace(SRC_PATH, DIS_PATH);

    fs.stat( disFilePath,  function(err, stat) {
        if(err === null) {
            fs.unlinkSync(disFilePath);
        }
        else if (err.code == 'ENOENT') {
            source.toFile(disFilePath);
        }
        else {
            console.log('路径出错：' + err);
        }
    });


}