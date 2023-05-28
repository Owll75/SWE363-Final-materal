const express = require('express');

const app = express();
app.set('view engine','ejs');

const bodyparser = require('body-parser');
const {check, validationResult} = require('express-validator'); 

app.listen(3000);

const urlencoderparser = bodyparser.urlencoded({extended:false});

app.get('/', (req, res)=>{
    // res.send('<p>Home Page</p>');
    res.render('index');
});

app.get('/form', (req, res)=>{
    res.render('form');
    res.json(req.body);
});

// app.post('/form', urlencoderparser, (req,res)=>{
//     res.json(req.body);
// });

app.post('/form', urlencoderparser, [
    check('fname','not valid format').exists().isLength({min:3})
], (req,res)=>{
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.status(422).jsonp(err.array());
    }
    res.json(req.body);
});

// app.use(express.json())

// app.post('/form', (req, res) => {
// //   const name  = req.body.fname;
// //   const email = req.body.email
// //   const age   = req.body.age
//     // console.log("This is form page");
//     res.json(req.body);
// })