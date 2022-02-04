# Shorthand Properties

>  속성을 파악해서 축약하자

### CSS 예제

```css
.before {
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    margin-left: 5px;
}

.after {
    margin: 10px 5px 10px 5px;
}
```

### JavaScript 예제

```js
// Shorthand Properties
// Concise Method
// ES2015+

const firstName = 'poco';
const lastName = 'jang';

// before
const person = {
    firstName: 'poco',
    lastName: 'jang',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

// after
const person = {
	firstName,
    lastName,
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
};
```

&nbsp;

# Computed Property Name

> ES2015+
>
> 다시 공부하기

&nbsp;

# Lookup Table

key-value로 관리된 배열이 나열된 형태

#### switch-case문으로 작성했을 때

```js
function getUserType(type){
  switch (key) {
    case 'ADMIN':
        return '관리자';
    case 'INSTRUCTOR':
      return '강사';
    case 'STUDENT':
      return '수강생';
    default:
      return '해당 없음';
  }
}
```

#### Object Lookup Table로 변경했을 때

```js
const USER_TYPE = {
  ADMIN: '관리자',
  INSTRUCTOR: '강사',
  STUDENT: '수강생',
  UNDEFINED: '해당 없음'
};

function getUserType(type) { 
  return USER_TYPE[type] ?? USER_TYPE[USER_TYPE.UNDEFINED];
}
```

#### 팩토리 함수처럼 사용할 수도 있다

```js
function getUserType(type) {
  return ( 
    {
      ADMIN: '관리자',
      INSTRUCTOR: '강사',
      STUDENT: '수강생',
    }[type] ?? '해당 없음'
  );
}
```

&nbsp;

# Object Destructuring

### 1. 함수의 매개변수가 3개 이상인 경우

#### 일반적인 경우 

- 매개변수들의 순서를 지켜줘야한다

```js
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const poco1 = new Person('poco', 30, 'korea');
const poco2 = new Person('poco', undefined, 'korea');
```

#### 객체 구조분해할당을 사용할 경우

- 순서, 값에 상관없이 코드를 유연하게 작성할 수 있게 된다

```js
function Person({ name, age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const poco = new Person({
  name: 'poco',
  location: 'korea'
});
```

- 만약 필수 매개변수임을 분명하게 하고 싶다면 그 외 매개변수들을 Option 처리해서 필수 매개변수, 옵션 매개변수를 구분지을 수 있다

```js
function Person(name,{ age, location }) {
  this.name = name;
  this.age = age ?? 30;
  this.location = location ?? 'korea';
}

const pocoOptions = {
  age: 30,
  location: 'korea'
}
const poco = new Person('poco', pocoOptions);
```

### 2. 배열값을 가져올 때

#### 인덱스로 요소를 가져오는 경우

```js
const orders = ['first', 'second', 'third'];

const st = orders[0];
const rd = orders[2];
```

#### 배열 구조분해할당으로 가져오는 경우

```js
const [st1, , rd1] = orders; // 이 경우에는 갯수가 늘어나면 불편하다

const {0:st2, 2:rd2} = orders;
```

&nbsp;

# Object.freeze

```js
const STATUS = Object.freeze({
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
});

STATUS.PENDING = 'P2';
STATUS.NEW_PROR = 'NEW';

console.log(STATUS); // { PENDING: 'PENDING', SUCCESS: 'SUCCESS', FAIL: 'FAIL' }
```

- 새로운 property를 추가하거나, 다른 값을 할당해도 변하지 않는다

- 동결이 잘 되었는지 확인하는 메서드도 지원한다

  ```js
  Object.isFrozen(STATUS);
  ```

### 문제점 ⇒ Deep Copy(Freeze) 불가능

```js
const STATUS = Object.freeze({
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  OPTIONS: {
    GREEN: 'GREEN',
    RED: 'RED',
  }
});

STATUS.OPTIONS.GREEN = 'G';
STATUS.OPTIONS.YELLOW = 'Y';
delete STATUS.OPTIONS.RED

console.log(STATUS.OPTIONS); // { GREEN: 'G', YELLOW: 'Y'}

console.log(Object.isFrozen(STATUS.OPTIONS)); // false -------> deep freezing이 되지 않는다
console.log(Object.isFrozen(STATUS.OPTIONS.GREEN)); // true
```

#### 해결방법

depth가 있는 영역은 중첩된 freeze를 해줘야한다

1. 대중적인 유틸 라이브러리 (lodash)
2. 직접 유틸 함수 생성
2. Stackoverflow에서 다른사람들 코드 확인해보기
2. TypeScript 사용 => readonly 라는 키워드를 제공한다

```js
function deepFreeze(targetObj){
  // 1. 객체를 순회
  // 2. 값이 객체인지 확인
  // 3. 객체이면 재귀
  // 4. 그렇지 않으면 Object.freeze

  Object.keys(targetObj).forEach(key => {
    if(typeof key === 'object'){
      deepFreeze(targetObj[key]);
    }
  })

  return Object.freeze(targetObj);
}
```

&nbsp;

# Prototype 조작 지양하기

- 이미 JS는 많이 발전했다
  - 직접 만들어서 모듈화 => 배포 => NPM
- JS 빌트인 객체를 건들지 말자

&nbsp;

# hasOwnProperty

```js
function hasOwnProp(targetObj, targetProp) {
  return Object.prototype.hasOwnProperty.call(targetObj, targetProp);
}
```

&nbsp;

# 직접 접근 지양하기

- 예측 가능한 코드를 작성해서 동작이 예측 가능한 앱

```js
const model = {
  isLogin: false,
  isValidToken: false,
}

function login() {
  model.isLogin = true;
  model.isValidToken = true;
}

function logout() {
  model.isLogin = false;
  model.isValidToken = false;
}

someElement.addEventListener('click', login);
```

⇒ 어디서나 model에 직접 접근해서 수정할 수 있다

```js
// 직접 접근 지양
const model = {
  isLogin: false,
  isValidToken: false,
}

// model에 대신 접근
const setLogin(bool){
  model.isLogin = bool;
}
const setValidToken(bool){
  model.isValidToken = bool;
}

// model에 직접 접근 X
function login() {
  setLogin(true);
  setValidToken(true);
}
function logout() {
  setLogin(false);
  setValidToken(false);
}

someElement.addEventListener('click', login);
```

⇒ model에 접근하는 권한을 함수에 위임해서 코드를 안전하게 관리한다

⇒ model이 어디서 변하는지 추적이 쉽게 된다
