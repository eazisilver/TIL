'use strict';

// JS안에 내장된 object, 비동기 수행
// 1. 상태에 대한 이해
// State: pending -> fulfilled or rejected
// Producer vs Consumer (정보 제공자와 사용자 차이점 이해)

// 1. Producer
// new Promise를 생성하면 즉시 executor(콜백함수)가 자동적으로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read file O/I)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    // promise가 정상적으로 수행되면 resolve로 전달한 value가 들어옴
    // then을 호출하면 다시 promise가 호출됨. 리턴된 promise에서 catch chaining
    console.log(value);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log('finally'));

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then(getEgg) //(hen) => getEgg(hen) 생략가능
  .catch((error) => {
    return '🥯'; // 계란을 받아올 때 에러가 발생하면 빵으로 대체
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
