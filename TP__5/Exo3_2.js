/**
 * b. Modifier ce programme pour permettre la recherche dans les fichiers d’un
 *   répertoire et ses sous-répertoires, si un des arguments est un répertoire.
 */
var fs = require('fs');
const myArgs = process.argv.slice(2);
const regular = new RegExp(myArgs[0]);
console.log(myArgs[0], 'is your text!');
check = false;
for (let i = 1; i < myArgs.length; i++) {
    const paragraph = fs.readFileSync(myArgs[i]).toString();
  
    if (paragraph.match(regular) || null) {
        console.log('***this text is found on:' + myArgs[i]+'***');
        check = true;
     }
}
if (check == false ){
    console.log('Sorry, I did not find it in any file.');
}
/* 
    for a subdirectory it needs to be passed by the subdirectory name, for example the test:
    node Exo3_2.js hello test.txt test2.txt test3.txt test/test4.txt test/test5.txt
    where test4.txt & test5.txt are passed in by the name of the subdirectory first using test/test4.txt & test/test5.txt
    I tried resolving this problem using:
   ===========================================================================================================
    const Path = require("path");
    const FS   = require("fs");
    let Files  = [];
    function ThroughDirectory(Directory) {
    FS.readdirSync(Directory).forEach(File => {
        const Absolute = Path.join(Directory, File);
        if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
        else return Files.push(Absolute);
    });
    }
    ThroughDirectory("./TP__5");
    ===========================================================================================================
    All files with subdirectories are passed inside the Files[] array,
    I can check if myArgs.contains(Files[i])
    if it does then it means there is a file somewhere in the tree that was passed as an argument
    After I tried to execute the function on it it didn't work well.
*/