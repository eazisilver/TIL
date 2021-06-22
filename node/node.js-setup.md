# Node.js project Setup!

## javaScript

- 브라우저에 내장되어 있음.

## node.js

- Javascript 런타임
- 브라우저 밖에서 돌아가는 JavaScript
- JS를 브라우저 밖으로 가지고 나와서 유저가 사용할 수 있게 하는 것.
- 이를 통해 js로 서버도 만들고 웹 스크래퍼도 만들 수 있음( 가능성의 확장, 모바일 앱 등을 만들 수도 있음)

## npm

- JavaScript 언어를 위한 패키지 매니저
- nodeJS와 상호작용 할 수 있도록 해줌.

## express

- Node.js를 위한 빠르고 개방적인 간결한 웹 프레임워크

## json

- 프로그래머가 파일에 정보를 저장하기 위해 만든 방식 중 하나.
- NodeJS인 경우 파일의 이름이` package.json` 으로 해야함.
- 프로젝트를 동작시킬 때 필요한 모듈들의 정보를 담고 있다.
- `dependencies`

  - 프로젝트를 구동시키는데 필요한 모듈들
  - `dependencies`를 선언하고 `npm i` 만 입력하면 npm에서 `dependencies`를 확인해서 해당되는 모듈을 설치해준다.
  - npm install express

- `devDependencies`

  - 개발자에게 필요한 `dependencies`
  - 운전을 더 잘하려면 음악이 필요한 것처럼 :)
  - npm install **--save-dev** @babel/core

- `package-lock.json`
  - 패키지들을 안전하게 관리해준다.
  - 패키지가 수정됐는지 해시값으로 체크해줌.

## Babel

- javaScript compiler
- 최신 자바스크립트를 `nodeJS`가 이해할 수 있는 javaScript로 바꿔준다.  
  ➡ nodeJS의 버전에 상관없이 최신 자바스크립트를 사용할 수 있게 된다!

- `nodemon`
  - 파일이 수정되는 것을 감시해주는 패키지
  ```
  "scripts": {
   "dev": "nodemon --exec babel-node index.js"
  }
  ```
  - `npm run dev`를 한번만 실행하면 index.js가 수정될 때마다 알아서 재시작 해준다.

### 언제 node.js 쓸까?

1. 프론트엔드, 백엔드 모두 js로 만들고 싶을때
2. node.js는 아무것도 없는데 블럭 쌓아서 성 만드는 것과 비슷한 개념

특히 많은 데이터를 옮겨야 할때 적합=> database 쓰기, 삭제, 많은 유저들의 message 송수신 등

- 데이터 저장, 생성, 삭제, 시각화를 최대한 빠르게 보여주고, 실시간으로 보여주는 기능에서 최고의 선택지

우버처럼 실시간 정보교환, 위치정보처리 혹은 채팅 같은 기능을 만들 때 node.js 쓰자
Form 처리, 파일 upload 파일 다운로드, 정적인 웹사이트들 만들기 좋음

node.js 무쓸모 => 하드웨어 파워(서버)를 이용해야 할 경우, data Science, 이미지 압축, 이미지 크롭, 필터적용, 그리고 그걸 저장(because, 하드웨어.. 램.. 메모리 등에 접근할 수 없기 때문) =>이럴때 Django 쓰라
