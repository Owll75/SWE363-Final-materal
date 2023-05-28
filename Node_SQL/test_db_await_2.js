const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');

// ****** connecting to a Database

async function mainApp() {
    const db = async function dbcon() {
        await sqlite.open({
          filename: './db/test.db',
          driver: sqlite3.Database,
        });
      }

      console.log("Select one user:")
    
    var sql = "SELECT * FROM mytable WHERE age = 20"
    r = await db.get(sql)
    console.log("Read:", r.ID, r.name, r.city)
    
}

mainApp();

//   const rows = async ()=>{
    
//     await sqlite.all("SELECT * FROM mytable");
//     console.log(rows);
//   }

//   rows();
// //   const rows = db.a

// let db = new sqlite3.Database('./db/test.db', (err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log('Connected to the chinook database.');
//   });

//   let db = ()=>{
//     return new Promise((res,rej) =>{
//         new sqlite3.Database('./db/test.db', (err) => {
//             if (err) {
//               console.error(err.message);
//             }
//             console.log('Connected to the chinook database.');
//           });})        
//         // res("Task One")})  
//   }
  
  
// const taskOne = ()=>{
//     return new Promise((res,rej) =>{
//         // console.log("Task ONEEEE");
//         res("Task One")})    
// }

// async function callAllTasks(){
//     // const t1 = await taskOne();
//     const dbcon = await db();
    
//     // const t1 = await taskOne();
//     // console.log(t1);
// }

// callAllTasks();

// async ()=>{ await taskOne();}

// // function test(){
// //     console.log("Hello World"); 
// // }

// test();

// ****** Creating Table  

// db.run("CREATE TABLE IF NOT EXISTS mytable (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)");

// // **** Inserting rows to Table

// db.run("INSERT INTO mytable (name, age) VALUES ('Anwar', 30)");
// db.run("INSERT INTO mytable (name, age) VALUES ('Musfique', 20)");

// **** Querying all rows with all() method

//  const result =  db.all("SELECT * FROM mytable", function(err, rows) {
//     rows.forEach(function (row) {
//       console.log(row.id + ": " + row.name + " (" + row.age + ")");
//     });
//    });

 
// ******* Query the first row in the result set

//    db.get("SELECT * FROM mytable WHERE age = 20", function(err, row) {
//     console.log("Single Row: " + row.name + ": (" + row.age + ")");
//    });

//    ******* Query str as variable

//    let sqlQ = "SELECT * FROM mytable";

//    db.all(sqlQ, (err, rows) =>{
//     if(err){
//         console.error(err.message);
//     }
//     rows.forEach((row) =>{
//       console.log("Name: " + row.name + " (" + row.age + ")");
//     });
//    });

// // **** each() method

//    db.each(sqlQ, (err, row) =>{
//     if(err){
//         console.error(err.message);
//     }
//       console.log("Each Name: " + row.name + " (" + row.age + ")");    
//    });

// // ****** close the database connection
// db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.');
//   });