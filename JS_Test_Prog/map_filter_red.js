let arr=[1, 2, 3, 4, 5, 6, 7];
console.log(arr);

let newArr = arr.map((number)=>{
    return number * number;
});

console.log("After applying map(): " + newArr);

newArr = arr.filter((number)=>{
    return number > 4;
});

console.log("After applying filter(): " + newArr);

newArr = arr.reduce((sum, number)=>{
    return sum + number;
},5);

console.log("After applying reduce(): " + newArr);

newArr = arr.map((number)=>{
    return number * number;
}).filter((number)=>{
    return number > 20;
}).reduce((sum, number)=>{
    return sum + number;
});

console.log(typeof newArr);