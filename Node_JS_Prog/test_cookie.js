const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    
}));

app.listen(2000,()=>{
    console.log('listening to port 2000');
});

app.get('/', (req,res)=>{
    res.send('Hello Cookie lesson');
});

