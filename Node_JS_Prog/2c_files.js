// reaing files

const fs = require('fs');

fs.readFile('./Docs/abc.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

// console.log('last line');

