const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('turnoff motor!');

  setTimeout(()=>
  {
    console.log('turnoff motor!please dada');
  },4000)
});
console.log('the script is started');
myEmitter.emit('waterFull');

console.log('turnoff ');