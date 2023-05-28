const express = require('express');

const app = express();
app.set('view engine','ejs');

const {check, validationResult} = require('express-validator'); 
app.use(express.urlencoded({extended:true}));

app.listen(3000);

app.get('/form', (req, res)=>{
    res.render('form');
    // res.json(req.body);
});

app.post('/form', 
    check('fname','not valid format')
    .exists()
    .isLength({min:3, max:7}), 
    check('password', 'password should be numeric')
    .isNumeric(),
    (req, res)=>{
    const err = validationResult(req);
    if(!err.isEmpty()){
        res.send(err);
    }else{
        res.json(req.body);
    }
});





// app.get('/', (req, res)=>{
//     // res.send('<p>Home Page</p>');
//     res.render('index');
// });



// app.use(express.json())

// app.post('/form', (req, res) => {
// //   const name  = req.body.fname;
// //   const email = req.body.email
// //   const age   = req.body.age
//     // console.log("This is form page");
//     res.json(req.body);
// })