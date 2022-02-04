# 타입 검사

## typeof

- `typeof` 연산자가 우항에 있는 피연산자를 평가한 후에 문자열로 반환해준다
- 원시형은 대부분 타입검사가 잘 이루어지지만, 참조형은 간별해내기가 어렵다
- 동적으로 변하는 언어 ⇒ 타입 동적

```js
function myFunc(){}
class MyClass{}
const str = new String('문자열')

// Primitive
typeof '문자열'    // string
typeof true       // boolean
typeof undefined  // undefined
typeof 123        // number
typeof Symbol()   // symbol

// Reference
typeof myFunc     // function
typeof MyClass    // function
typeof str        // object

typeof null       // object ----------------> WTF!! 언어적 오류라고 인정했음
```



## instanceof

```js
function Person(name, age){
  this.name = name;
  this.age = age;
}

const test = {
  name:'lee',
  age : 22
}
const poco = new Person('poco', 99);

poco instanceof Person // true
test instanceof Person // false

const arr = []
const func = function() {}
const date = new Date()

arr instanceof Array // true
func instanceof Function // true
date instanceof Date // true

arr instanceof Object // true
func instanceof Object // true
date instanceof Object // true

// Reference 타입의 최상위는 Object이기 때문에 true

Object.prototype.toString.call(func) // [object Function]

```

&nbsp;

# undefined & null

- null 은 0으로 표현이 된다

  > null  + 123 // 123

- undefined 는 숫자 연산이 안된다

  > undefined + 123 // NaN



### :: undefined

- 값이 없거나 정의가 되지 않은 것
- math ⇒ NaN
- type ⇒ undefined

### :: null

- 없다는 것을 명시적으로 표현
- math ⇒ 0
- type ⇒ object

&nbsp;

# eqeq 줄이기

### Equality operator(==)

- 암묵적 타입 형변환이 일어난다

```js
'1' == 1     // true
1 == true    // true
```

### Strict equality operator(===)

```js
'1' === 1     // false
1 === true    // false
```

&nbsp;

# 형변환 주의하기

- 암묵적 변환

​	숫자 + 문자열 ⇒ 문자열

- 명시적 변환

​	String(), Boolean(), parseInt()

&nbsp;

# isNaN

IEEE 754 표준

부동소수점

```js
Number.MAX_SAFE_INTEGER
Number.isInteger()  

// is Not a Number ⇒ 숫자가 아니다
isNaN(123)              // false : 숫자다
typeof 123 === 'number' // true

Number.isNaN(123 + 'string')  // false
isNaN(123 + 'string')         // true
```

### ES2015 + 

- isNaN : 느슨한 검사
- Number.isNaN : 엄격한 검사