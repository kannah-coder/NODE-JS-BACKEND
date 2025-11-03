//modules
const {john,peter}=require('./4-name.js');
const sayHI=require('./5-utils.js');

sayHI('susan');
sayHI(john);
//sayHI(names.john); if not destructing used
console.log(peter);
sayHI(peter);


const data=require('./6-alternativeSyntax.js');
console.log(data);


require('./7-mind-grenade.js');