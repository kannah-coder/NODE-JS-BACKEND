const _=require('lodash');
const items=[1,2,[3,4,5,[1,2,3,9]]];
const newItmes=_.flattenDeep(items);
console.log(newItmes);
console.log('hello world');