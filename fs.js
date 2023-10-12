//async/await.............

const fs = require('fs/promises');
// async function createFile(filename, content){
//     try {
//         await fs.writeFile(filename, content);
//         console.log('File created');
//     } catch (error) {
//         console.log(error);
//     }
// }
// createFile('file.txt', 'This file is created')
// createFile('file.txt1', 'This file is created')

// delete file
// async function deleteFile(filename){
//     try {
//         await fs.unlink(filename);
//         console.log(`file ${filename} is deleted`);
//     } catch (error) {
//         console.log(error);
//     }
// }
// deleteFile('file.txt')

//rename a file
// async function renameFile(oldName, newName) {
//     try {
//         await fs.rename(oldName, newName);
//         console.log(`file ${oldName} is renamed to ${newName}`);
//     } catch (error) {
//         console.log(error);
//     }
// }
// renameFile('file.txt1', 'file.txt')

// create folder
async function createFolder(folderName){
    try {
        await fs.mkdir(folderName);
        console.log(`folder ${folderName} is created`);
    } catch (error) {
        console.log(error);
    }
}
createFolder('Folder1')