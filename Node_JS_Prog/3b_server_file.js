const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');

    console.log(req.url);

    fs.readFile('./views/about.html', (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            if(req.url == '/about'){
                res.write(data);
            }
            
            res.end();
        }
    });
});

server.listen(3000, 'localhost', ()=>{
    console.log("Listening for request at port 3000");
});