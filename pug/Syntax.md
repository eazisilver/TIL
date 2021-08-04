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
`footer`처럼 모든 화면에 반복해서 들어가는 부분은 따로 관리한다.
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
- #{title}을 다른 태그에서 사용할 때
  - ex) `h1=title` or `h1 #{title} | Welcome`
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
