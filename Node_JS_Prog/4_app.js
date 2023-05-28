const express = require('express');

// *** express app
const app = express();

// *** Listen for req
app.listen(3000);

app.get('/', (req, res)=>{
    // res.send('<h1>Home Page</h1>');
    // console.log({root: __dirname});
    res.sendFile('./views/index.html',{root: __dirname});
});

app.get('/about', (req, res)=>{
    // res.send('<h2>About Page</h2>');
    res.sendFile('./views/about.html',{root: __dirname});
});

// *** check req.param value

app.get('/profile/:id/:name', (req, res)=>{
    res.send('Your profile id is: ' + req.params.name);
    // res.send('Your profile id is : ' + req.params.id + ' and name is: ' + req.params.name);
});

app.get('/cityInfo', (req, res)=>{
    var state = req.query.state;
    var city = req.query.city;

    res.send('Your state is ' + state + ' and city is ' + city);
});

app.get('/form', (req, res)=>{
    res.sendFile('./views/form.html',{root: __dirname});
});

// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.urlencoded({ extended: true}));

app.post('/form', (req, res)=>{
    // console.log(req.body);
    // res.send(req.body);
    res.sendFile('./views/about.html',{root: __dirname});
});







// **** Middleware

// app.use((req, res, next)=>{
//     console.log("Hello");
//     next();
// });

// app.use((req, res, next)=>{
//     console.log("Another middleware");
//     next();
// });


// *** cookies

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

// app.get('/set-cookies',(req,res)=>{
//     // res.setHeader('Set-Cookie','newUser=true');

//     res.cookie('newUser', true);
//     res.cookie('fname', 'Musfique',{maxAge:10000});
//     res.send('you got the cookie');
// });

// app.get('/read-cookies', (req,res)=>{
//     const cookies = req.cookies;
//     console.log(cookies.newUser);
// });

// *** session

// const session = require('express-session');
// app.use(session({
//     secret:'secret-key',
//     resave:false,
//     saveUninitialized:false,
// }));

// let viewCount = 0;

// req.session.viewCount =0;
// app.get('/session',(req,res)=>{
//     //  viewCount +=1;
//     req.session.viewCount += 1;
//     // res.send('Total count is ' + viewCount);
//     res.send('Total count is ' + req.session.viewCount);
// });