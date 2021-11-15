const fs = require('fs');
const dataPath = './data/posts.json';

const readFile = (callback, returnJson = false, filePath = dataPath) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            throw err;
        }
        callback(returnJson ? JSON.parse(data) : data);
    });
};

const writeFile = (fileData, callback, filePath = dataPath) => {
     fs.writeFile(filePath, fileData, (err) => {
        if (err) {
            throw err;
        }
        callback();
    });
};

exports.readFile = readFile;
exports.writeFile = writeFile;