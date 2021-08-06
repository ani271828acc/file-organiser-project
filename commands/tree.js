// filesystem tree function

let fs = require("fs")
let path = require("path")

function treeFn(_path) {
    // console.log("tree " + _path)
    if(_path == undefined || !(fs.existsSync(_path))) {
        treeHelper(process.cwd(),0)
        return
    } 
    treeHelper(_path,0)
}

function treeHelper(src,ct) {
    let isFile = fs.lstatSync(src).isFile()
    let name = path.basename(src)
    if(isFile) {
        for(let i=0;i<ct;i++) {
            process.stdout.write("  ")
        }
        process.stdout.write('|---' + name + '\n') 
        return
    }
    for(let i=0;i<ct;i++) {
        process.stdout.write("  ")
    }
    process.stdout.write('|---' + name + '\n')
    let folders = fs.readdirSync(src)
    for(let i in folders) {
        let childPath = path.join(src,folders[i])
        treeHelper(childPath,ct+2)
    }
}

module.exports = {
    tree: treeFn
}