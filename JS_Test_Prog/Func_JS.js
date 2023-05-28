// function square(v){
//     // let v=5;
//     // console.log(v*v);
//     // document.write(v*v);
//     return (v*v);
// }

//  console.log(square(6));

// let s = function s (v){
//     // console.log(v*v);
//     return (v*v);
// };

// console.log(s(7));
// console.log(typeof s);

// ******** Arrow function

function sum(a, b){
    return a + b;
}

console.log("Sum = " + sum(5,7));

let sum2 = (a, b)=>{
    return a+b;
}

console.log("Sum (Arrow Func) = " + sum2(7,8));

let sum3 = (a,b)=> a+b;

console.log("Sum (Arrow Func Shorter version): " + sum3(10,20));

// function isPositive(number){
//     return number > 0;
// }

document.addEventListener('click', function(){
    console.log('Hello');
});


document.addEventListener('click', ()=>{
    console.log('Hello');
});








