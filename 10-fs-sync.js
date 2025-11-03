const {readFileSync,writeFileSync}=require('fs');
// similar to const fs=require('fs'); fs.readFileSync

const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');

writeFileSync(
    './content/result-sync.txt',
    `here the result of two file : ${first} ,${second}`,
    {flag:'a'}   //The { flag: 'a' } option tells Node how to open the file before writing.

    // The 'a' stands for append mode — meaning:
    // 👉 Don’t overwrite the file, just add (append) new content to the end.
)
