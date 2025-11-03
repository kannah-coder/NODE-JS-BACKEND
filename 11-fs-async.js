// import { read } from "fs";

const {readFile,writeFile}=require('fs');
// readFile(
//     './content/first.txt'
//     , 'utf-8', (err,res)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
    
//         console.log(res);
        
//     }

// )

console.log('start');
readFile(
  './content/first.txt',     // ✅ path of the file
  'utf-8',                   // ✅ encoding (so it returns text, not binary)
  (err, res) => {            // ✅ callback function runs AFTER file is read
    if (err) {
      console.log(err);      // ❌ runs if file not found or permission error
      return;
    }
      console.log(res);      // ✅ prints the actual file content
    
    const first=res;
    readFile('./content/second.txt','utf-8',(err,result)=>{
         if (err) {
          console.log(err);       
          return;
        }
          console.log("second.txt result:",result); 

    });  
    
    const second=res;
    // console.log('outer res:',second);
    // console.log('inner res :',first)
    writeFile(
      './content/result-async.txt',
      `HERE IS THE RESULT OF ASYNC FS :${first}, ${second}`
    ,(err,res)=>{
      if(err){
        return;
      }
      console.log('done with the task');
    }
    )

  }
)
console.log('starting next task');



/*

// import { read } from "fs";

const {readFile,writeFile}=require('fs');
// readFile(
//     './content/first.txt'
//     , 'utf-8', (err,res)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
    
//         console.log(res);
        
//     }

// )

console.log('start');
readFile(
  './content/first.txt',     // ✅ path of the file
  'utf-8',                   // ✅ encoding (so it returns text, not binary)
  (err, res) => {            // ✅ callback function runs AFTER file is read
    if (err) {
      console.log(err);      // ❌ runs if file not found or permission error
      return;
    }
      console.log(res);      // ✅ prints the actual file content
    
    const first=res;
    readFile('./content/second.txt','utf-8',(err,result)=>{
         if (err) {
          console.log(err);       
          return;
        }
          console.log("second.txt result:",result); 

    
    
    const second=result;
    // console.log('outer res:',second);
    // console.log('inner res :',first)
    writeFile(
      './content/result-async.txt',
      `HERE IS THE RESULT OF ASYNC FS :${first}, ${second}`
    ,(err,res)=>{
      if(err){
        return;
      }
      console.log('done with the task');
    }
  )

    }); 

  }
)
console.log('starting next task');


*/