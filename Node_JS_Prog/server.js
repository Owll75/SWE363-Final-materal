const http = require('http');

const server = http.createServer((req, res)=>{
    // console.log('request made');
    console.log(req.url, req.method);

    let path = './views/';

switch(req.url){
    case '/':
        path += 'index.html';
        break;
    
    case '/about':
        path += 'about.html';
        break;
    case '/about':
        path += 'form.html';
        break;
    default:
        path += '404.html';
        break; 
}

    // set response header content

    // sen plain text
    
    // res.setHeader('Content-Type','text/plain');
    // res.write('hello Musfique');
    // res.end();

    // send HTML 

    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>hello Musfique</h1>');
    // res.write('<p>lorem5 ahsghja hadhjfja</p>');
    // res.end();

    // send HTML file
    
    res.setHeader('Content-Type','text/html');
    
    const fs = require('fs');
    // fs.readFile('./views/index.html', (err, data)=>{
    fs.readFile(path, (err, data)=>{
        if(err)
        {
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    });

});


server.listen(3000, 'localhost', ()=>{
    console.log('listening for req on port 3000');
});