/*
- CSS 가 하는 일은 HTML 태그를 가리키는 일 
가리키는 행위 >  Selector 

속성(property) : 글씨크기, 색상 등등 
속성들은 중괄호로 묶는다

blueTitle {
}

 
- Cascading  : 브라우저가 css코드를 읽을 때 위에서부터 순서대로 읽는다는 의미
              즉. 맨 마지막에 있는 코드가 적용


- Block and Inline
    .block: 요소 옆에 다른 요소가 올 수 없음. Box 개념
            대부분의 box들은 block
            <div>, <p>, <address>, <header>  등등

    .block의 특징
            margin : box의 border(경계)로부터 바깥에 있는 공간
                    * Collapsing margins - 자식box의 경계가 부모box의 경계와 같을 때 일어나고, 그 때 두 box의 margin이 하나가 됨. (위, 아래쪽만 일어남)
            padding : box의 border(경계)로부터 안쪽에 있는 공간
            border : box의 경계
            브라우저는 자동으로 적용하는 사항들이 있다.


    .inline: 하나의 요소 옆에 다른 요소 올 수 있다. 즉 같은 줄에 위치할 수 있다.
            inline 요소들을 외워놓는게 편함.
            <span>, <a>, <code>

    .inline의 특징
            높이와 너비를 가질 수 없음
            그렇기 때문에 margin 위, 아래 margin을 가질 수 없다. 따라서 block으로 바꿔줘야함.
            padding은 상하좌우 가능
    
    .block을 inline으로, inline을 block으로
        display 속성을 사용해서 변경할 수 있다.
        inline은 높이와 너비가 없고 block은 높이와 너비가 있다.
        block -> inline 
        : inline-block. 을 사용해서 inline 속성을 가지게 할 수 있음
          근데 정해진 형식이 없고 block사이에 마음대로 공간이 생기기 때문에 잘 사용하지 않음. 
          반응형 디자인을 지원하지 않음. -> 결론은 inline-block은 안쓴다~
        : flexbox
          2차원 레이아웃에서 잘 작동
          매우 유연, 얼마나 빈 공간을 줄지 자동으로 계산.
          1) 자식 엘리먼트에는 어떤 것도 적지 말아야 함. 부모 엘리먼트에만 명시한다.
          2) 주축, 교차축 (main axis, cross axis)
          

        display: flex;
        flex-direction: column; 주축-수직, 교차축-수평 으로 바뀜 
        justify-content: center; main axis 에 적용되는 것 
        align-items: flex-end;  cross axis에 적용되는 것 
           
- position ~~~~노마드코드 댓글 참고

- pseudo selector : 좀 더 세부적으로 엘리먼트를 선택해주는 것
   css에서만 선택하면 된깐 html 코드를 고칠 필요가 없음.
   span:nth-child(1){}
   span:first-child{}
   span:last-child{}
   span:nth-child(even){}  
   span:nth-child(odd){}  
   span:nth-child(2n){} 
   span:nth-child(3n+1){} 

-combinator  
   div span   {} div 속 span을 의미. div의 direct children이 아니여도 작동
   div > span {} span이 div의 direct children임을 의미. direct children이 아니면 작동X
   p + span   {} p와 동등한 위치에 있는 span을 의미. 부모요소도 자식요소도 아닌 것. p다음에 오는 형제인 span에 적용 (sibling)
   p ~ span   {} span이 p의 형제인데 바로 뒤에 오지 않을 때. (combinator)

-states: active, focus, hover, visited, focus-within  
- focus-within : focused인 자식을 가진 부모 엘리먼트에 적용
  (댓글에 states 요약한거 정리하기!ㅎㅎㅎ)

- class
    .여러 요소들에서 쓸 수 있다
    .여러개의 class를 가질 수 있다    
    
 
    
-color 
  css의 color system
  1) hex    
  2) rgb, rgba (alpha)
*/
