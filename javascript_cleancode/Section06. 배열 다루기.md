# JavaScript의 배열은 객체다

```js
const arr = [1,2,3]

arr[3] = 'test';
arr['property'] = 'string value';
arr['obj'] = {};
arr[{}] = [1,2,3]
arr['func'] = function(){return 'hello'};

for(let i =0 ; i< arr.length; i++){
  console.log(arr[i])
}

const arrNew = arr.map(e => {
  console.log(e);
})
console.log(arr)
console.log(Array.isArray(arr))
```

&nbsp;

# Array.length

#### ⚠️ 자바스크립트 Array의 length는 배열의 길이를 보장하지 못한다

```js
const arr = [1, 2, 3];

console.log(arr.length); // 3

arr.length = 10;

console.log(arr.length); // 10

console.log(arr); // [1, 2, 3, , , , , , , ] ⟿ ?!
```

```js
const arr = [1, 2, 3];
arr[9] = 10;

console.log(arr.length); // 10

console.log(arr); // [1, 2, 3, , , , , , , 10 ] ⟿ ?!
```

#### ⚠️ 배열 초기화

```js
Array.prototype.clear = function(){
  this.length = 0;
};

function clearArray(array){
  array.length = 0;
  return array;
}

const arr = [1, 2, 3];

arr.clear();
console.log(arr);

console.log(clearArray(arr));
```

- 무의식적으로 사용하지말고, 잘 생각해서 사용하기!

&nbsp;

# 배열 요소에 접근하기

구조분해핟당 사용하기

&nbsp;

# 유사 배열 객체

Array.from(object) 으로 배열로 만들 수 있음

```js
const arrayLikeObject = {
  0: 'Hello',
  1: 'World',
  length: 2,
}

const arr = Array.from(arrayLikeObject);
console.log(arr.length)
```

&nbsp;

# 불변성(immutable)

1. 배열을 복사한다
2. 새로운 배열을 반환하는 메서드들을 활용한다 
   - `filter(), map(), slice()`

```js
const origin = ['123', '456'];
const newArray = origin;

origin.push(10);
origin.push(11);
origin.push(12);
origin.unshift(0);

console.log(origin); // [ 0, '123', '456', 10, 11, 12 ]
console.log(newArray); // [ 0, '123', '456', 10, 11, 12 ]
```

```js
const origin = ['123', '456'];
const newArray = [...origin];

origin.push(10);
origin.push(11);
origin.push(12);
origin.unshift(0);

console.log(origin); // [ 0, '123', '456', 10, 11, 12 ]
console.log(newArray); // ['123', '456']
```

&nbsp;

# for문 배열 고차함수로 리팩터링 & 메서드 체이닝

```js
/**
 * 배열 고차 함수
 * 
 * 1. 원화 표기
 * 2. 1000원 초과 리스트만 출력
 * 3. 가격 순 정렬
 */
const price = [1000, 2000, 3000, 4000, 5000];

const suffixWon = (price) => price + '원';
const isOverOneThousand = (price)  => Number(price) > 2000; 
const ascendingList = (a, b) => a - b;

const getWonPrice = (priceList) => {
  // const isOverList = priceList.filter(isOverOneThousand);
  // const sortList = isOverList.sort(ascendingList)
  // return sortList.map(suffixWon);
  
  return priceList
          .filter(isOverOneThousand)
          .sort(ascendingList)
          .map(suffixWon);  
}

console.log(getWonPrice(price))
```

&nbsp;

# map vs forEach

> 반환값의 유무

### forEach

- 매 요소마다 함수를 실행시킨다
- 반환값 : `undefined`

### map

- 매 요소마다 함수를 실행시키고, 반환되는 값이 새로운 배열에 저장된다
- 반환값 : 새로운 배열 반환

&nbsp;

# continue & break

> forEach() 문을 사용할 때, 예외를 던지지 않고는 중간에 멈출 수 없다.
>
> [forEach 조기종료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#%EC%84%A4%EB%AA%85)

### 조기에 반복을 종료하는 방법

1. 간단한 for 반복문
2. for...of, for...in 반복문
3. Array.prototype.every()
4. Array.prototype.some()
5. Array.prototype.find()
6. Array.prototype.findIndex()

`every(), some(), find(), findIndex()` 는 배열 요소를 판별 함수에 전달하고, 그 결과의 참/거짓 여부에 따라 반복의 종료 여부를 결정한다 