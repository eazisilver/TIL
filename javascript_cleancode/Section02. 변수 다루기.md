# var를 지양하자

> var를 지양하고 const를 사용해야한다

#### **var** ⟸ **ES2015** ⟹ let & const

### var 

- **function scope**

```javascript
console.log(name); // undefined

var name = '이름';
var name = '이름2';
var name = '이름3';
name = '이름';

console.log(name); // 이름
```

- 동일한 변수이름으로 다른 값을 넣어도 선언이 된다.

- 호출하면 가장 마지막에 할당된 값이 나온다.

  ⇒ 재할당, 재선언이 가능하다

- 코드가 길어지면 복잡도가 높아지고 가독성이 떨어진다
- 실수할 가능성이 매우 높다

### let & const

- **block scope + TDZ** => 안전하게 코드를 작성할 수 있다

```js
let name = '이름';
name = '이름1';

console.log(name); // 이름1
```

⇒ let: 재선언 X, 재할당 O

```js
const name = '이름';

console.log(name); // 이름
```

⇒ const: 재선언 X, 재할당 X

&nbsp;

# function scope & block scope

### var : 함수단위 스코프

```javascript
var global = '전역'

if (global === '전역'){
  var global = '지역';

  console.log(global); // 지역 ⇒ if문은 함수가 아니다!
}

console.log(global); // 지역
```

&nbsp;

### let & const : 블럭단위 스코프

```js
const global = '전역'
{
  const global = '지역';

  console.log(global); // 지역
}
console.log(global); // 전역
```

### let 보다는 const !

- `const` 는 재할당만 금지된다
- 객체, 배열 같은 참조 객체들은 조작할 수 있다

&nbsp;

# 전역공간 사용 최소화

> #### 전역공간 == 최상위
>
> window : 브라우저 환경
>
> global: Node.js 환경

- 어디서나 접근이 가능하기 때문에 스코프 분리가 위험해진다



### 해결책

- 전역변수를 만들지 않는다

- 지역변수만 만든다

- window, global을 조작하지 않는다

- const, let을 사용하자

- 즉시 실행함수, 모듈, 클로저 

&nbsp;

# 임시변수 제거하기

- 명령형으로 가득한 로직이 나온다

- 어디서 어떻게 잘못되었는지 디버깅하기 어렵다

- 추가적인 코드를 작성하고 싶은 유혹에 빠지기 쉽다

- 함수를 하나의 역할만 하게 만들기 어렵게 된다



### 해결책

- 함수 나누기
- 바로 반환하기
- 고차함수 (map, filter, reduce)
- 선언형 코드로 작성하기

&nbsp;

#### 💩️ bad code

```js
function getElements(){
  const result = {} // 임시 변수

  result.title = document.querySelector('.title');
  result.text = document.querySelector('.text');
  result.value = document.querySelector('.value');
}
```

#### ✨️ better code

```js
function getElements(){
  return {
    title : document.querySelector('.title'),
    text  : document.querySelector('.text'),
    value : document.querySelector('.value')
  }
}
```



### 추가적인 스펙이 생긴경우

1. 함수를 추가
2. 함수를 수정
   - 여러곳에서 사용하는 경우 month, day, hour에 원치않은 조작이 일어날 수 있다

#### 💩️ bad code

```js
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.getHours();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;

  return {
    month, day, hour
  };
}
```

#### ✨️ better code

```js
function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.getHours();

  return {
    month : month >= 10 ? month : '0' + month,
    day   : day >= 10 ? day : '0' + day,
    hour  : hour >= 10 ? hour : '0' + hour
  };
}

function getDateTimeCustom() {
  const currentDateTime = getDateTime(new Date());
    
  return {
    month : currentDateTime.month + '월',
    day   : currentDateTime.day + '일',
    hour  : currentDateTime.hour + '시'
  }
}

console.log(getDateTimeCustom())
```

&nbsp;

# 호이스팅 주의하기

#### 호이스팅 : 런타임 시, 선언과 할당이 분리되어 선언이 최상단으로 끌어올려지는 것

- 예측이 불가능하다



### 해결책

- var를 사용하지 않는다
- let & const 를 사용하자

- 함수 표현식을 사용한다