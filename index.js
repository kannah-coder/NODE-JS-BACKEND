import getPosts,{getPostsLength} from "./postController.js";
console.log(getPosts());
console.log("LENGTH:",getPosts().length);
console.log("FROM OTHER FILE Length :",getPostsLength());




// const {generateNumber,celciusToFarheniet} =require('./utils');
// console.log(`Random Integer: ${generateNumber()}`);
// console.log(`c 2 f: ${celciusToFarheniet(32)}`);

// // import { generateNumber } from "./utils.js";
// // import { celciusToFarheniet } from "./utils.js";
// // console.log(`Random Integer: ${generateNumber()}`);
// // console.log(`c 2 f: ${celciusToFarheniet(32)}`);