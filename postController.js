const posts=[
    {
        id:1,
        title:"P1",
    },
    {
        id:2,
        title:'P2'
    }
]

// export const getPosts=()=>posts;
// const getPosts=()=>posts;
// export const getPostsLength=()=>posts.length;

// export default getPosts;
// Default export (only one allowed) A default export means your file exports one main thing — like one function, class, or object.
export default function getPosts() {
  return posts;
}

// Named export (you can have many) A named export means you export specific items (you can have many).
export function getPostsLength() {
  return posts.length;
}

//If you want, you can rename them using as:

// import { getPostsLength as len } from "./postController.js";
// console.log(len()); //in Import fucntion
