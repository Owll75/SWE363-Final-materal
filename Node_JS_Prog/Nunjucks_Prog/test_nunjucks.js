const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

// app.use(express.static('public'));

// app.set('view engine', 'nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express:app
});

app.listen(3000);
let info={fname:'Phase 2', a:5, list:[{n:'pqr', d:505}, {n:'abc', d:12}, {n:'abc', d:12}, {n:'abc', d:12}, {n:'xyz',d:25}]};

app.get('/', (req, res)=>{
    // res.send('hello <b>nunjucks</b>');
    res.render('hello.html', {info2:info});
});

app.get('/parent', (req, res)=>{
    // res.send('hello nunjucks');
    res.render('parent.html');
});

app.get('/child', (req, res)=>{
    // res.send('hello nunjucks');
    res.render('child.html');
});