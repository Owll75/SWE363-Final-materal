const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs');

app.listen(3000);

app.use((req, res, next)=>{
    console.log("I am Middleware 1");
    next();
});

app.use((req, res, next)=>{
    console.log("I am NEXT Middleware 2");
    next();
});



app.get('/', (req,res)=>{
    res.render('index', {lname:'Ronaldo CR7'});
});

app.use((req, res, next)=>{
    console.log("I am Middleware 3 at the end");
    next();
});


app.get('/about',(req, res)=>{
    res.render('about');
});





// **** Middleware