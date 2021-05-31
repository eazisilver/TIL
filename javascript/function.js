// Function
// - fundamental building block in the program
// - subprogram can be used multiple times (재사용)
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { something... return;}
// one function === one thing (중요!!! 하나의 func은 하나의 일만 해야함.)
// naming: doSometing, command, verb
// e.g. createCardAndPoint => createCard, createPoint
// function is object in JS

function printHello() {
  console.log('hello');
}
printHello();

// param타입이 중요한 경우에는 좀 문제가 될 수 있다..
function log(message) {
  console.log(message);
}
log('hello@');

// 2. Parameters
// premitive params: passed by value
// object params: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);
