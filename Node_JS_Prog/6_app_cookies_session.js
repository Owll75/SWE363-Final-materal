const express = require('express');

const app = express();

app.listen(3000);

// *** cookies

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/set-cookies',(req,res)=>{
    
    res.cookie('newUser', true);
    res.cookie('fname', 'Musfique',{maxAge:8000});
    res.send('you got the cookie');
});

app.get('/read-cookies', (req,res)=>{
    const cookies = req.cookies;
    console.log(req.cookies);
    // console.log(cookies.newUser);
    // console.log(cookies.fname);
    // console.log(cookies.newUser22);
});


app.get('/set-cookies22',(req,res)=>{
    
    res.cookie('newUser22', false);
    // res.cookie('fname', 'Musfique',{maxAge:3000});
    res.send('you got the cookie22');
});

// *** session

const session = require('express-session');
app.use(session({
    secret:'secret-key',
    resave:false,
    saveUninitialized:false,
}));

// let viewCount = 0;

app.get('/session',(req,res)=>{
    //  viewCount +=1;
    req.session.viewCount += 1;
    // res.send('Total count is ' + viewCount);
    res.send('Total count is ' + req.session.viewCount);
    // console.log(req.session);
});