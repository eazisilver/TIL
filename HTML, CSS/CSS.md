
# CSS
### CSS 가 하는 일은 HTML 태그를 가리키는 일 Selector 

## 📌 Categories
- [Cascading Meaning of CSS](#-cascading-meaning-of-css)
- [Block](#-block)
- [Inline](#-inline)
- [block을 inline으로 바꾸기(flex)](#-block을-inline으로-바꾸기)
- [Position](#-position)
- [Pseudo selector](#-pseudo-selector)
- [Combinator](#-combinator)
- [States](#-states)
- [box-sizing](#-box-sizing)
- [Color System](#-color-system)
- [Variable](#-variable-(custom-property))

## 📑 Cascading Meaning of CSS
브라우저가 CSS코드를 읽을 때, 위에 있는 코드부터 순서대로 읽는다는 의미.  
즉, 맨 마지막에 있는 코드가 적용


## 📑 Block
- 요소 옆에 다른 요소가 올 수 없음. (Box 개념)
- 대부분의 box들은 block
- `<div>`, `<p>`, `<address>`, `<header>`  등등
- block의 특징
  - margin  : box의 border(경계)로부터 바깥에 있는 공간  
             * Collapsing margins: 자식box의 경계가 부모box의 경계와 같을 때 일어나고, 그 때 두 box의 margin이 하나가 됨. (위, 아래쪽만 일어남)  
  - padding : box의 border(경계)로부터 안쪽에 있는 공간
  - border  : box의 경계

## 📑 Inline
- 하나의 요소 옆에 다른 요소 올 수 있다. 즉 같은 줄에 위치할 수 있다.
- inline 요소들을 외워놓는게 편함.
- `<span>`, `<a>`, `<code>` 등등
- inline의 특징
  - 높이와 너비가 무시됨.
  - 그렇기 때문에 margin 위, 아래 margin을 가질 수 없다. 따라서 block으로 바꿔줘야함.
  - padding은 상하좌우 적용가능
    
## 🔖 block을 inline으로 바꾸기
### display: inline  
width, height 가 무시돼서 무언가 추가하지 않는 이상 아무것도 안보임.  

### display: inline-block
위의 문제를 해결할 수 있으나, 반응형 디지인 지원하지 않음.  
또한 정해진 형식이 없고 block 사이에 마음대로 공간이 생기기 때문에 잘 사용하지 않음.   
=> 해결방안 `flex`  

### display: flex
2차원 레이아웃에서 잘 작동한다.  
매우 유연, 얼마나 빈 공간을 줄지 자동으로 계산.  


flexbox 사용규칙  
   1) 자식 엘리먼트에는 어떤 것도 적지 말아야 함.   
      자식 엘리먼트를 움직이게 하려면 부모 엘리먼트를 flex container로 만들어야 한다.  
   2) justify-content : main axis에서 작용 (default 수평)
   3) align-items     : cross axis에서 작용 (default 수직)  
  * flex-direction  : main axis와 cross axis의 default 값을 바꿀 수 있다. (default row)  
  * flex-wrap       : flex-wrap은 flex의 하위 요소들이 flex를 선언한 영역을 벗어날 경우, 강제로 한 줄로 배치할 지 행을 나눠서 배치할 지 결정하는 속성.  
                      `wrap` flex를 선언한 영역을 벗어날 경우 행을 나눠서 배치.  
                      `nowrap` 은 default값으로 강제로 한 줄로 배치.
 
 > flexbox 개념 잡기 좋은 게임 사이트  https://flexboxfroggy.com/#ko
 
## 📑 Position
### fixed
- 초기 위치에 고정시켜줌. 스크롤해도 항상 제자리
- top, left, right, bottom 중 하나라도 수정했을 때 초기 위치가 무시되고 지정한 위치에 자리잡음.
### relative
- element를 조금 움직이고 싶을 때, 처음 위치를 기준으로 움직이다.
### absolute
- static, relative와 다르게 일반적인 문서 흐름에서 제외
- 가장 가까운 relative 부모를 기준으로 이동, 없으면 body가 부모

## 📑 Pseudo selector
- 좀 더 세부적으로 엘리먼트를 선택해주는 것
- css에서만 선택하면 되니깐 html 코드를 고칠 필요가 없음. so cool!  
- `n-child(n)` 형제들 사이에서 n번째 요소를 선택할 수 있는 의사 선택자.
- 사용 예시
  * span:nth-child(1){}  
  * span:first-child{}  
  * span:last-child{}  
  * span:nth-child(even){}    
  * span:nth-child(odd){}    
  * span:nth-child(2n){}   
  * span:nth-child(3n+1){}   
  * tag[attribute = "vallue"] : 속성의 값이 "vallue"인 태그를 모두적용
  * tag[attribute ~= "vallue"] : 앞뒤에 공백이 있는 상태에서 "vallue" 값을 포함한 모든 tag 적용
  * tag[attribute *= "vallue"] : 앞뒤 공백 상관없이 "vallue" 값을 포함한 모든 tag 적용
  * tag: required {} required 속성을 가지고있는tag
- pseudo element
  - ::placeholder placehoder만을 꾸밀때 사용
  - ::selection 드래그 했을때
  - ::first-letter 앞 글자에
  - ::first-line 첫 줄


## 📑 Combinator  
1. div span   {}   
  div 속 span을 의미. div의 direct children이 아니여도 작동  
2. div > span {}   
  span이 div의 direct children임을 의미. direct children이 아니면 작동X  
3. p + span   {}   
  p와 동등한 위치에 있는 span을 의미. 부모요소도 자식요소도 아닌 것. p다음에 오는 형제인 span에 적용 (sibling)    
4. p ~ span   {}   
  span이 p의 형제인데 바로 뒤에 오지 않을 때. (combinator)    


## 📑 States
### active
클릭할 때 작동
### hover
마우스 커서를 올려놓으면 작동
### focus
element가 focused된 상태
### visited
링크 방문 했을 때
### focus-within  
focus되는 children이 있으면 작동

## 📑 box-sizing
### `box-sizing: border-box` 의 사용 예
CSS에서 200px크기의 box에 50px padding을 넣을 때,
```
width: 200px;
padding: 50px; 
```
위와 같이 입력하면 CSS에서는 200px의 box width를 유지하려 하므로 총 크기 250px (w:200, p:50) 의 box를 가지게 된다.   
이때 `box-sizing: border-box`를 입력하게 되면 padding을 입력해도 box사이즈를 신경쓰지 않는다는 의미가 되어  
처음에 원했던 padding 50, 150 box를 가지게 된다.


## 📑 Color System
1) hex code

2) rgb
: 각각 red, green, blue를 의미

3) rgba
: 'a(alpha)'는 투명도
  0(투명)~1(불투명) 사이의 값으로 조절할 수 있습니다.

## 📑 Variable (custom property)
--변수명  
var(--변수명)


