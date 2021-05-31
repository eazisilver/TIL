// JS는 runtime에서 type이 결정됨. (dynamic typing)

// 1. Use strict
// added in ES 5
// use this from Valina Javascript
'use strict';

// -------------------------------------------------------------------

// 2. Variable, rw(read/write)
// let (added in ES6)
{
  let name = 'jieun';
  console.log(name);
  name = 'hello';
  console.log(name);
}
console.log(name);

// var (don't ever use this!)
// var hoisting
// 값을 선언하기도 전에 쓸 수 있는 것.
// = 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것.
// block scope을 무시함. 즉 어디에서나 호출이 됨.

// -------------------------------------------------------------------

// 3. Constant (불변), r(readOnly)
// use const whenver possible.
// only use let if variable needs to change.
const dayInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reason:
// - security
// - thread safety
// - reduce human mistakes

// -------------------------------------------------------------------

// 4. Variable types
// 1) primitive, single item: number, string, boolean, null, undefiedn, symbol
// 2) object, box-container
// function, first-class function(함수의 param,return type으로 전달 가능한 것.)

const count = 17;
const size = 1.1;

const infinity = 1 / 0; // Infinity
const negativeInfinity = -1 / 0; // -Infinity
const nAn = 'not a number' / 2; // NaN

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'Hello ' + brendan;
console.log(typeof greeting);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// null
let nothing = null;

// undefined
let x;
let x = undefined;

// symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true

// object, real-life object, data structure
const jieun = { name: 'jieun', age: 20 };
jieun.age = 21;

// 5. Dynamic typing: dynamically typed language
// JS는 runtime에서 type이 결정됨. (dynamic typing)
