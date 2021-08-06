let utility =  {}
utility.types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'pptx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex', 'md'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    image: ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG', 'gif', 'GIF'],
    code: ['js', 'html', 'css' ,'c', 'cpp', 'py', 'java', 'json', 'vue', 'dart']
}
utility.codeTypes = {
    CP: ['c', 'cpp'],
    Web: ['html', 'css', 'js', 'json'],
    Framework: ['vue', 'jsx'],
    other: ['java', 'py', 'dart']
}

module.exports = utility