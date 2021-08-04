# pug

# Configuring Pug
1. `view engine`을 `pug`로 설정
2. `views`의 path설정
    - default path가 process.cwd() + '/views' 이므로 본인 프로젝트 경로에 맞게 설정해준다. 
 
``` javascript
const app = express();

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');
```

# Including Templates
- partials : 여러 페이지에 동일한 내용을 넣을 때
``` pug
// footer.pug

footer &copy; #{new Date().getFullYear()} 😝This is a Footer😝
```
``` pug
// base.pug

doctype html
html(lang='ko')
    head
        title HelloWorld!
    body
        h1 content
    include ./partials/footer.pug
```
# Inheritance (Extends & Block)
- `extends`
  - extends {상속받을 pug파일}
- `block`
  -  템플릿의 창문같은 것. 이것저것 집어넣을 수 있는 공간
``` pug
// base.pug

doctype html
html(lang='ko')
    head
        title HelloWorld!
    body
        block content
    include ./partials/footer.pug
```
``` pug
// home.pug

extends base.pug

block content 
    h1 Home🏡
```
# Variables
- #{title}
- #{title} 사용  
  - 다른 text와 같이 쓸 때  
    `h1 #{title} | Welcome`
  - 변수만 단독으로 쓸 때  
    `h1=title`
# Conditionals
### if else 
``` pug
ul 
    if fakeUser.loggedIn
        li 
          a(href="/login") Log out
    else    
        li 
          a(href="/login") Login
```
# Iteration
elements의 list를 보여주는 것
``` javascript
const items = [1,2,3,4,5,6,7,8,9]
```
``` pug
each item in items 
            li=item
        else 
            li Sorry, nothing found
```
## Mixins
- 똑똑한 partials. partials과 유사
- 데이터를 받을 수 있는 일종의 미리 만들어진 HTML block이라고 볼 수 있다.
``` javascript  
const videos = [
    {
      title: 'Video #1',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 1,
    },
  ];
```
``` pug
// home.pug

extends base.pug
include mixins/video

each item in videos 
    +video(item)
else 
    li Sorry, nothing found
```
``` pug
// mixins/video.pug

mixin video(video)
    div
        h4=video.title
        ul
            li #{video.rating} / 5.
            li #{video.comments} comments.
            li Posted #{video.createdAt}.
            li #{video.views} views.
```
