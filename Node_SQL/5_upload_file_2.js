const express = require('express');
const multer = require('multer');

const app = express();

const port = 3000;
app.listen(port);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'img/')
    },
    filename: function (req, file, cb) {
      const fname = file.originalname;
      cb(null, fname)
    }
  })
  
  const upload = multer({ storage: storage })

app.get("/register", (req,res)=>{
   res.sendFile(__dirname + "/register.html"); 
});

// app.post("/register", upload.single('image'), (req,res)=>{
//     res.send("File is uploaded"); 
//  });

 // *** upload multiple files

app.post("/register", upload.array("image",3), (req,res)=>{
    res.send("Files are uploaded");
});
 






// app.get("/test", (req,res)=>{
//     res.send("testing api");
// });