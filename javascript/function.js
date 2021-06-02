// Function
// - fundamental building block in the program
// - subprogram can be used multiple times (재사용)
// - performs a task or calculates a value

// #1. Function declaration
// function name(param1, param2) { something... return;}
// one function === one thing (중요!!! 하나의 func은 하나의 일만 해야함.)
// naming: doSometing, command, verb
// e.g. createCardAndPoint => createCard, createPoint
// JS에서 function은 object의 일종이다.

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

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
// "..." 배열 형태로 전달된다
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}
printAll('hello', 'world', 'jieun');

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
}
printMessage();

// #2. Function expression
// 1. anonymous, named function
const print = function () {
  console.log('print');
};
print();

// 2. Callback
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous
const printYes = function () {
  console.log('Yes!');
};

// named function
const printNo = function print() {
  console.log('No!');
};
randomQuiz('wrong', printYes, printNo);

// 3. Arrow function -> always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
};
const simplePrint2 = () => console.log('simplePrint');
const add = (a, b) => a + b;

// 4. IIFE: Immediately Invoked Function Expression
// 함수의 선언과 동시에 호출
(function hello() {
  console.log('IIFE');
})();
