'use strict';

// 자바스크립트는 동기적이다
// hoisting이 된 이후부터 코드가 순서대로 하나씩 동기적으로 실행된다.
// hoisting: var, function 선언들이 제일 위로 올라가는 것

// 동기적으로 실행하는 callback
function printImmediately(print) {
  print();
}

// 비동기적으로 실행하는 callback (예측X)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

printImmediately(() => console.log('hello world'));
printWithDelay(() => console.log('async callback'), 2000);

// 콜백 지옥 💩
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 콜백체인의 문제점
// 1. 가독성 떨어진다. => 비즈니스 로직을 이해하기 어렵다
// 2. 디버깅 힘들다.
// 3. 유지보수 어렵다.
