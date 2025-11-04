const EventEmitter=require('events');

class MyEmitter extends EventEmitter{}

const myEmitter=new MyEmitter();

myEmitter.on('waterfull',()=>{ //refernce ki .peduthunam

    console.log('off motor');
    setTimeout(()=>{

        console.log('PLZZZ OFFFFFF!!!');
    },3000);
});

myEmitter.emit('waterfull');
console.log('the script is running');
console.log('the script is still running');

/*




import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

*/