
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
``` javascript
// db.js

import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/wetube', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
```
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
