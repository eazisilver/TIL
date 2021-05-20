# Categories
- [Transition](#transition)
- [Transformation](#transformation)
- [Animation](#animation)
- [Media query](#media-query)
- [git과 github](#git과-github)

# Transition

- 어떤 상태에서 다른 상태로의 "변화"를 보여주는 애니메이션
- Rule_01) transition은 state가 없는 요소에 정의되어야 한다.
- Rule_02) 변화시킬 속성이 state쪽에 정의되어 있어야함.
- 사용예시  
     transition: all 5s ease-in-out;  
     transition: all 1100ms cubic-bezier(0.6, 0.04, 0.98, 0.335);  
- ease-in function: 브라우저에게 변화하는 방법을 알려주는 역할
- 애니메이션 확인해볼 수 있는 사이트 : https://matthewlein.com/tools/ceaser

# Transformation

- 한 요소를 awesome하게 변형시키는 것
- CSS로 3D까지 할 수 있기 때문에 cool한 것임
- box element를 변형시키지 않는다. 즉, 다른 sibling들에게 영향을 끼치지 않는다.
- margin, padding이 적용되지 않는다. 일종의 3D transformation 이기 때문
- CSS의 3D는 GPU로 돌아간다. (3d 작업을 할 수 있다)
- transition과 transformation을 합친다면 아름다운 애니메이션을 만들 수 있다.

# Animation

- transition은 마우스를 올렸을 때, 어떤 행동을 할 때만 애니메이션이 생긴다.
- 우리가 원하는 만큼 애니메이션을 만들고 재생시킬 수 있다.


### 애니메이션 생성

```
@keyframes 애니메이션_이름 {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(180deg) translateX(100px);
  }
}
```

### 애니메이션 사용

```
animation: 애니메이션_이름 5s ease-in-out infinite(무한);
```

### 애니메이션을 원래 위치로 돌아가게 하는 방법

```
@keyframes superSexyCoinFlip {
  0% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(180deg) translateY(-100px);
  }
  100% {
    transform: rotateY(0) translateY(0px);
  }
}
```
0, 25, 50, 100 등 여러 단계로 나눌 수 있다

### animation-delay

- animation 속성은 적용되는 시점부터 바로 동작한다.
- `animation-delay` 원래 시작되는 시점에서부터 일정시간만큼 대기했다가 시작하게 하는 속성.  
   일반적으로 속성값은 양수를 사용. 음수를 넣을 경우 delay없이 시작하나 애니메이션의 동작지점이 절대값만큼 지난 시점부터 진행된다.

### animation에 time term 주기
- animation-delay는 aminatio이 적용되는 첫 시점에만 적용.
- animation이 멈췄다가 다시 동작하게 하려면, animation이 동작하는 시간에 공백을 만들어준다.
- 예를 들어 1s 동안 animation을 진행한다면, 0.5s(50%)에 이미 동작을 완료하고 1s(100%)에는 완료된 동작을 유지(50%와 동일한 내용)하는 코드를 작성하는 방식.

### animation `forwards`
- `animation: hideSplashScreen 1s ease-in-out forwards`
- keyframe의 마지막 속성 값 유지

### `visibility:hidden`
- 실제로 html을 없애는 건 아니고 아래 레이어를 클릭할 수 있도록 안보이게 해주는 효과.

### 애니메이션 속성 선언할 때 `will-change`
- will-change는 애니메이션이 좀 더 부드럽게 동작할 수 있게 한다. → 브라우저에게 어떤 것이 변할 것인지 예고해주는 것
- will-change는 그래픽 카드를 이용해서 애니메이션을 가속화 한다.

# Media query

오직 CSS만을 이용해서 스크린의 사이즈를 알 수 있는 방법  

- 스크린의 사이즈에 따라서 property 조정가능
- orientation: landscape 가로모드
- orientation: portrait 세로모드


# git과 github

### git

- 어떤 파일이든 변경된 내용을 확인할 수 있다.
- git시스템은 파일을 binary format으로 인식하기 때문
- git은 파일을 계속 추적(Tracking)하는 것

### github

- 컴퓨터가 고장나면 변경했던 내역들도 다 날아감 > 다 잃어버리게 됨.
- github는 변경내역을 업로드하는 곳

- git: 계속 추적하면서 변경내역을 관리, vesion control system
- github: 그 변경내역을 업로드, 파일내역과 파일들을 올려주는 공간
