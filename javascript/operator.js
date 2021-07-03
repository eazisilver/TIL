// Logical operator: ||(or) , &&(and) , !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// || 은 첫번째 값이 true이면 뒤의 조건들은 보지 않고 바로 true를 반환하기 때문에
// 무거운 연산들은 조건의 뒤쪽에 적어주는 것이 좋다. 여기서는 check()
console.log(`or: ${value1 || value2 || check()}`); // true 반환

function check() {
  for (let i = 0; i < 10; i++) {
    console.log('hello');
  }
  return true;
}

// Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion 타입을 변경해서 검사한다.
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// false : 0, -0, '', null, undefined, NaN
// true  : 1, -1, 'hello', [] 등 값이 들어있으면 true (배열은 object이기 때문에 true)
let num = 6;
if (num) {
  console.log('true');
}
// num이 false면 뒤 구문이 실행안되고
// num이 true면 뒤 구문이 실행된다.
num && console.log(num);

let obj;
obj && console.log(obj.name); // obj.name을 바로 접근하면 에러발생함으로 앞에서 null인 경우는 뒤구문을 실행안하도록 함.
