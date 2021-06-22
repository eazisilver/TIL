# 1. Data Types

### ◾ Integer & String

1 + 2.5  
"hello" + "world!"

### ◾ Boolean

`true` or `false`

### ◾ null 과 undefined

##### `null`

빈 것이 아니라 아무것도 없는 것으로 채운 것. 값이 "없다"는 것을 알려줄 때 사용하는 것!!

##### `undefined`

초기화하지 않았을 때. 공간은 있는데 값이 "비어있는" 것.

# 2. Variables

##### `const` 
재선언 금지, 재할당 금지(constant)
##### `let` 
재선언 금지, 재할당 가능  
##### `var` 
재선언 가능, 재할당 가능  

`const` 를 주로 사용하고 필요할 때만 `let` 사용하기. `var` 는 사용하지 말것.

# 3. Object

array는 요소들이 어떤 의미를 가지는지 알 수 없다. 모든 요소가 같은 의미를 가짐.  
따라서 object 형식으로 속성과 값을 가질 수 있도록 정의.

``` javascript
const player = {
    name: "jieun",
    points: 12312,
    handsome: true,
};
console.log(player.name);
console.log(player["name"]);
console.log(player.points);
player.lastName = "potato"; // 가능
```

# 4. Function
계속 반복해서 사용할 수 있는 코드
캡슐화해서 여러 번 실행할 수 있다.
``` javascript
function sayHello(name){
    console.log(`Hello! My name is ${name}`)
}
sayHello("jieun");
sayHello("nico");

const player = {
    name: "jieun",
    sayHello: function(name){
        console.log("hello" +  name);
    }
}
player.sayHello("jieun");
```
