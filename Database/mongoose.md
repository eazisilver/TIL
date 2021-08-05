
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
