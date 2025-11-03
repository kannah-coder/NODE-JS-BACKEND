const path=require('path');
console.log(path.sep); //returns the path separator used by your operating system.
const filePath=path.join('/content/','subfolder','test.txt');
console.log(filePath);
const base=path.basename(filePath);
console.log(base);