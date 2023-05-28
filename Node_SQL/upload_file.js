const express = require("express");
const multer = require('multer');

const app = express();
app.set('view engine','ejs');

app.listen(3000);

// ******* File Upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/img/')
    },
    filename: function (req, file, cb) {
      const fname = file.originalname;
      cb(null, fname)
    }
  })
  
  const upload = multer({ storage: storage })

app.get('/upload', (req, res)=>{
    res.render('upload');
    // res.json(req.body);
});

app.post("/upload", upload.single("image"), (req,res)=>{
    res.send("File is uploaded");
});

// *** upload multiple files

// app.post("/upload", upload.array("image",3), (req,res)=>{
//     res.send("File is uploaded");
// });