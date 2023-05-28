const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res)=>{
    // res.json({title: 'Web Eng'});
    res.send(JSON.stringify({title: 'Web Programming'}));
});

app.get('/user', (req, res)=>{
    res.json({firstName: 'David', lastName: 'Smith', age: 33});
});

app.get('/users', (req, res)=>{
    res.json([{firstName: 'David', lastName: 'Smith', age: 33}, {firstName: 'John', lastName: 'Dale', age: 21}, {firstName: 'Chris', lastName: 'Joe', age: 27}]);
});