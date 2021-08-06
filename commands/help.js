function helpFn() {
    console.log(`
    fs_tools + tree                 : get filesystem tree of current folder
    fs_tools + organize             : organize files in current folder
    fs_tools + tree + "path"        : get filesystem tree of specified folder
    fs_tools + organize + "path"    : organize files in specified folder

    WARNING: AVOID RUNNING THESE COMMANDS ON LARGE OR SYSTEM FOLDERS
    `)
}

module.exports = {
    help: helpFn
}