# 1. The Document Object

- Javascript로 HTML Document에 접근하고 읽고 변경할 수 있다.
- 브라우저가 HTML 정보가 아주 많이 들어있는 document라는 object를 전달해준다.

# 2. HTML in Javascript
### ◾ getElementById()
``` html
    <h1 id="title">Hello~!<h1>
```
``` javascript
    const title = document.getElementById('title');
```

# 3. Searching for Elements
### ◾ getElementByClassName(), getElementByTagName()
- HTML Collection 으로 반환한다.(array)
- getElementByTagName() 인자값은 `div`, `ol`, `li`와 같은 태그들.
``` html
    <h1 class="content">Hello~!<h1>
    <h1 class="content">Hello~!<h1>
    <h1 class="content">Hello~!<h1>
    <h1 class="content">Hello~!<h1>
```
``` javascript
    const contents = document.getElementsByClassName("content");
    console.log(contents); // HTML Collection 반환

    const title = document.getElementsByTagName("h1");
    console.log(title); // HTML Collection 반환
```
### ◾ querySelector(), querySelectorAll()
- querySelector()는 element를 **CSS 방식**으로 검색할 수 있다.
- querySelector()는 첫번째로 검색된 element를 가져온다. 
  querySelectorAll()로 조건에 부합하는 모든 element를 가져올 수 있다.
``` html
    <div class="content">
        <h1 id="myText">1. title 안의 h1</h1>
        <h1>2. title 안의 h1</h1>
    </div>
    <div class="content">
        <h1>1. title 안의 h1</h1>
        <h1>2. title 안의 h1</h1>
    </div>
```
``` javascript
    const h1 = document.querySelector(".content h1");
    console.log(h1); // 첫번째 content클래스의 h1을 가져온다
    const h1All = document.querySelectorAll(".content h1");
    console.log(h1All); // h1이 들어있는 array 반환. 
    
    const h1 = document.querySelector(".content h1:first-child");
    const h1 = document.querySelector("#myText");
```
# 4. Events
### ◾ on~ event
- **addEventListener("click", handleTextClick)**
  - haddEventListener("click", **handleTextClick()**) ---> ❌
  - function을 바로 실행시키지 않고 이름을 넘겨준다!
  - function을 Javascript에 넘겨주고 text를 click할 경우에 Javascript가 실행버튼을 대신 눌러줄 수 있도록
- 두가지 방식
  - 1) addEventListener()
       ⭐더 선호하는 이유: removeEventListener를 통해서 제거할 수 있기 때문
  - 2) `oneventname` property
``` javascript
    const myText = document.querySelector("#myText");

    function handleTextClick(){
        myText.style.color = "blue";
    }
    function handleMouseEnter(){
        myText.innerText = "Mouse is here!";
    }
    function handleMouseLeave(){
        myText.innerText = "Mouse is gone!";
    }
    myText.onclick = handleTextClick;
    myText.addEventListener("mouseenter", handleMouseEnter);
    myText.addEventListener("mouseleave", handleMouseLeave);
```
### ◾ More event
- window 이벤트
  ```javascript
    function handleWindowResize(){
      document.body.style.backgroundColor = "tomato";
    }
    function handleWindowCopy(){
      alert("copier!");
    }
    function handleWindowOnline() {
      alert('ALL GOOOD 😊');
    }
    function handleWindowOffline() {
      alert('SOS no WIFI 🙁');
    }
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("copy", handleWindowCopy);
    window.addEventListener("online", handleWindowOnline);
    window.addEventListener("offline", handleWindowOffline);
  ```
# 5. CSS in Javascript
``` html
    <h1 class="sexy-font">Hello world<h1>
```
```javascript
    const title = document.querySelector('h1');

    function handleTitleClick(){
        const clickedClass = "clicked"; 
        if(title.classList.contains(clickedClass)){
            title.classList.remove(clickedClass);
        }else{
            title.classList.add(clickedClass);
        }
    }
    title.addEventListener("click", handleTitleClick);
  ```
➡`toggle`을 사용해서 코드 간략화.  
classList에 clickedClass가 있는지 확인해서 있으면 제거, 없으면 추가
  ```javascript
    const title = document.querySelector('h1');

    function handleTitleClick(){
        title.classList.toggle("clicked");
    }
    title.addEventListener("click", handleTitleClick);
  ```
