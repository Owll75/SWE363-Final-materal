const sqlite3 = require('sqlite3').verbose();

// ****** connecting to a Database
let db = new sqlite3.Database('./db/test.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the test database.');
  });

  console.log("End of the program");

// ****** Creating Table  

// db.run("CREATE TABLE IF NOT EXISTS mytable (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)");

// // **** Inserting rows to Table

// db.run("INSERT INTO mytable (name, age) VALUES ('John', 30)");
// db.run("INSERT INTO mytable (name, age) VALUES ('David', 20)");
// db.run("INSERT INTO mytable (name, age) VALUES ('Smith', 25)");
// db.run("INSERT INTO mytable (name, age) VALUES ('Donald', 40)");
// db.run("INSERT INTO mytable (name, age) VALUES ('Butler', 23)");
// db.run("INSERT INTO mytable (name, age) VALUES ('Rashid', 32)");

// // **** Querying all rows with all() method

 const result =  db.all("SELECT * FROM mytable", (err, rows)=> {
    rows.forEach((row)=> {
      console.log(row.id + ": " + row.name + " (" + row.age + ")");
    });
   });

// // ******* Query the first row in the result set

   db.get("SELECT * FROM mytable WHERE age = 20", (err, row)=> {
    console.log("Single Row: " + row.name + ": (" + row.age + ")");
   });

// //    ******* Query str as variable

   let sqlQ = "SELECT * FROM mytable";

   db.all(sqlQ, (err, rows) =>{
    if(err){
        console.error(err.message);
    }
    rows.forEach((row) =>{
      console.log("Name: " + row.name + " (" + row.age + ")");
    });
   });

  //  console.log("Hello World");

// **** each() method

   db.each(sqlQ, (err, row) =>{
    if(err){
        console.error(err.message);
    }
      console.log("Each Name: " + row.name + " (" + row.age + ")");    
   });

// ****** close the database connection
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });