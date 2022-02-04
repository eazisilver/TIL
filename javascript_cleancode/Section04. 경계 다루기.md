# min-max

- 함수의 구현부를 보지 않고, 함수 호출만 봐도 어떤 역할을 하는지 알 수 있도록 상수를 사용한다

```js
function genRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 상수 
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

genRandomNumber(MIN_NUMBER, MAX_NUMBER);
```

### 경계 다루기(min-max)

- 최소값과 최대값을 다룬다 
- 최소값과 최대값 포함 여부를 결정해야한다 ⇒ 네이밍에 포함여부를 표현한다
  - 초과 또는 미만: **_LIMIT**
  - 이상 또는 이하: **_IN**

```js
const MAX_AGE = 20;

function isAdult(age) {

  // 상수값 이상, 초과 ??
  if (age >= 20) { }
  if (age > 20) { }
}
```

&nbsp;

# begin-end

- 시작과 끝이 동일하지 않은 경우

- 예를 들어, 체크인 & 체크아웃 날짜

```js
function reservationDate(beginDate, endDate){
  // something
}

reservationDate('YYYY-MM-DD', 'YYYY-MM-DD');
```

&nbsp;

# first-last

- 포함된 양 끝을 의미한다
- 부터 ~~~~ 까지
- 연속성이나 규칙이 없다면 first-last를 고려해볼 수 있다

&nbsp;