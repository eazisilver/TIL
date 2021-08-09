
# Install
```
npm i mongoose
```

# Open
- url의 마지막에 사용할 database name 명시  
  | mongodb://127.0.0.1:27017/nameofyourdb

``` javascript
// db.js

import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/wetube', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, // findByIdAndUpdate() 를 사용하면 해당 프로퍼티를 추가하라는 경고가 뜬다.
  useCreateIndex: true, // Model 스키마에서 unique: true 옵션을 사용한 경우 해당 프로퍼티를 추가하라는 경고가 뜬다.
});
```
``` javascript
// server.js

import './db';
```

# Connection check
``` javascript
const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected to DB');
const handleError = (error) => console.log('❌ DB Error', error);

db.on('error', handleError);
db.once('open', handleOpen);
```
# findById(id)
# exists({_id : id})
# findByIdAndUpdate({ ... })
- property 추가 : `useFindAndModify: false`
- return 값: 업데이트되기 전의 값
  - `new: ture` 를 설정해주면 업데이트된 데이터를 반환
``` javascript
// db.js

import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/wetube', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
```
# findByIdAndDelete
- findByIdAndRemove오 약간의 차이가 있는데 특별한 이유가 없는 한 delete를 사용할 것  
  💡 mongodb는 롤백이 안되서 remove를 사용하면 되돌릴 수 없기 때문에 delete를 쓰라고 권장 
- findByIdAndDelete === findOneAndDelete({_id:id})

# middleware
https://mongoosejs.com/docs/middleware.html
- model이 생성되기 전에 만들어야 한다
- `this` : 저장하고자 하는 document
```javascript
import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  ...
});

videoSchema.pre('save', async function () {
  console.log('we are about th save : ', this); // this: 저장하고자하는 document
});

const Video = mongoose.model('Video', videoSchema);
export default Video;
```

# search query - regex
https://docs.mongodb.com/manual/reference/operator/query/regex/
```javascript
// search
    videos = await Video.find({
      title: {
        $regex: new RegExp(`^${keyword}`, 'i'), // keyword로 시작하는 문자 검색
        $regex: new RegExp(`${keyword}$`, 'i'), // keyword로 끝나는 문자 검색
        $regex: new RegExp(keyword, 'i'), // 대소문자 구분 X
      },
    });
```

