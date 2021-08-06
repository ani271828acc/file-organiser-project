// filesystem organize function

let fs = require("fs")
let path = require("path")
let utility = require("../utility")
let types = utility.types
let codeTypes = utility.codeTypes

function organizeFn(_path) {
    if(_path == undefined || !(fs.existsSync(_path))) {
        _path = process.cwd()
    } 
    console.log("all good")
    let desPath = path.join(_path, "organized_files")
    if(!fs.existsSync(desPath)) {
        fs.mkdirSync(desPath)
    }
    organizeHelper(_path,desPath)
}

function organizeHelper(src, dest) {
    let files = fs.readdirSync(src)
    for(let i = 0; i < files.length; i++) {
        let fileAdress = path.join(src, files[i])
        let isFile = fs.lstatSync(fileAdress).isFile()
        if(isFile) {
            let category = getCategory(files[i])
            console.log(files[i] + " belongs to -> " + category)
            let categoryPath = path.join(dest,category)
            if(!fs.existsSync(categoryPath)) {
                fs.mkdirSync(categoryPath)
            }
            let destPath = path.join(categoryPath,files[i])
            sendFile(fileAdress,destPath)
        }
    }
}

function getCategory(name) {
    let ext = path.extname(name).slice(1)
    for(let type in types) {
        for(let i = 0; i < types[type].length; i++) {
            if(ext == types[type][i]) {
                return type
            }
        }
    }
    return "other"
}

function sendFile(fileAdress,destPath) {
    fs.copyFileSync(fileAdress,destPath)
    fs.unlinkSync(fileAdress)
}

module.exports = {
    organize: organizeFn
}