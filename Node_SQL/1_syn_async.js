// *** Sync

// const taskOne = ()=>{
//     console.log("Task One");
// };

// const taskTwo = ()=>{
//     setTimeout(()=>{
//         console.log("Task 2 data loading");
//         }, 2000);
//     // console.log("Task Two");
// };

// const taskThree = ()=>{
//     console.log("Task Three");
// };

// const taskFour = ()=>{
//     console.log("Task Four");
// };

// taskOne();
// taskTwo();
// taskThree();
// taskFour();

// ****** Callback function

// function square(x){
//     console.log(`square of ${x} is: ${x * x}`);
// }

// function higherOrder(num, callback){
//     callback(num);
// }

// higherOrder(6, square);


// // ***** callback and higher order function

// const taskOne = (callback)=>{
//     console.log("Task One");
//     callback();
// };

// const taskTwo = (callback)=>{
//     setTimeout(()=>{
//         console.log("Task 2 data loading");
//         callback();
//     }, 2000);
// };

// const taskThree = (callback)=>{
//     console.log("Task Three");
//     callback();
// };

// const taskFour = ()=>{
//     console.log("Task Four");
// };

// // taskTwo(()=>{
// //     taskFour();
// // });

// taskOne(()=>{
//     taskTwo(()=>{
//         taskThree(()=>{
//             taskFour();
//         });
//     });
// });

// ***** Promises

// **** Promise - Pending, Resolve, Reject

// console.log("Welcome");

// const promise1 = new Promise((resolve, reject)=>{
//     let completedPromise = true;

//     if(completedPromise){
//         resolve("Completed Promise 1");
//     }else{
//         reject("Not completed Promise 1");
//     }
// });

// promise1.then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// });

// console.log("End");

const taskOne = ()=>{
    return new Promise((res,rej) =>{
        res("Task One")})    
}

const taskTwo = ()=>{
    return new Promise((res,rej) =>{
        setTimeout(()=>{
            res("Task 2 data loading");
        }, 2000)})    
}

const taskThree = ()=>{
    return new Promise((res,rej) =>{
        res("Task Three")})    
}

const taskFour = ()=>{
    return new Promise((res,rej) =>{
        res("Task Four")})    
}

// taskOne().then((res)=>{
//     console.log(res);
// });

// taskTwo().then((res)=>{
//     console.log(res);
// });

// taskThree().then((res)=>{
//     console.log(res);
// });

// taskFour().then((res)=>{
//     console.log(res);
// });

// taskOne().then((res)=>console.log(res))
// .then(taskTwo)
// .then((res)=>console.log(res))
// .then(taskThree)
// .then((res)=>console.log(res))
// .then(taskFour)
// .then((res)=>console.log(res));

// console.log("End");

// ***** Async and Await

async function callAllTasks(){
    console.log(await taskOne());
    console.log(await taskTwo());
    console.log(await taskThree());
    console.log(await taskFour());
}

callAllTasks();