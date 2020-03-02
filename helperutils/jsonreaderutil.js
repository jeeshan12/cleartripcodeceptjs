const fs = require('fs')

function getJsonObject(jsonString) {
    return JSON.parse(jsonString)
}

function readJsonFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8')
}
module.exports = {
    getJsonObject: getJsonObject,
    readJsonFile: readJsonFile
}