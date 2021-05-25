# express server 생성하기

## server
- 인터넷에 연결 돼 있으면서 request를 listening 하고 있는 컴퓨터

### request
- 서버에 요청하는 것
- 사용자가 브라우저를 통해서 웹사이트에게 하는 모든 상호작용
- listening하고 있는 서버에만 요청을 보낼 수 있다.

## express
1. application init
```
import express from "express"; // "node_modules/express"
const PORT = 4000;
const app = express();
```

2. server listen
```
const handleListening = () => console.log(`✅Server listening on port http://localhost:${PORT} 🚓`);
app.listen(PORT, handleListening)
```

3. request & response
```
app.get("/", (req, res) => 
  return res.send("Hello World!");
  // return res.end(); 연결종료
});
```
express에서 req, res object를 제공함.

## middleware
- request와 response의 중간
- 모든 middleware는 handler고, 모든 handler는 middleware (handler => controller)
- middleware는 하나의 url에만 사용되게 할 수도 있고 app 전체의 모든 url에서 사용할 수도 있다.
- 응답하기 전까지는 controller는 다 middleware
- 응답을 해주는 마지막 controller에는 next를 쓰지 않는다. 필요가 없기 때문.
```
const loggerMiddleware = (req, res, next) => {
    next();
}
```


