const http = require('http');

// *** create server
const server = http.createServer((req, res)=>{
    console.log('request made jksdkjfsbgk');
    console.log(req.url,req.method);

    res.setHeader('Content-Type','text/html');
    res.write("<h2>Hello KFUPM kjdhkjf</h2>");
    res.end();
});

server.listen(3000, 'localhost', ()=>{
    console.log("Listening for request at port 3000");
});






    // *** set header content type
    // res.setHeader('Content-Type', 'text/plain');
    // res.statusCode=300;
    // res.write("Hello KFUPM");
    // res.end();

    // res.setHeader('Content-Type', 'text/plain');
    // res.write("Hello KFUPM");
    // res.end();

    // res.setHeader('Content-Type', 'text/html');    
    // res.write("<h2>Hello KFUPM</h2>");
    // res.end();
    
    // if(req.url == '/about'){
    //     res.setHeader('Content-Type', 'text/plain');
    //     res.write('About Page');
    //     res.end();
    // }