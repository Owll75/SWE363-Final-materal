let age=["age"];
// age=35;
// const c=15;
// console.log("Age: " + age);

console.log("Type of variable Age is: " + typeof(age));
// let b=null;
// console.log("Value of variable b is: " + b);
// b=10;
// console.log("Value of variable b is: " + b);
// console.log("Type of variable b is: " + typeof(b));


// ********** Difference between let and var
// ***** var is available in window object

// function test(){
//     for(var i=0;i<5;i++){
//         console.log(i);
//     }
//     console.log(i);
// }

// test();

// var fname="Musfique";
// console.log(typeof fname);
// console.log("My name is  " + fname);

// ******* Template String

// console.log(`My name is ${fname}`);

// let n = `My name is ${fname}`;
// console.log(n);

// console.log("1" + 1);


// console.log('2'*'3');

// ******* JS String data type

let fname2 = 'Musfique Anwar';
// console.log("String Func");

// console.log(fname2.charAt(3));
// console.log(fname2.charCodeAt(3));
// console.log(String.fromCharCode(103,97,99));
// console.log(fname2.lastIndexOf('a'));
// console.log(fname2.substring(2,6).toUpperCase());
// // console.log(fname2.replace('fai', 'zzz'));
// console.log(fname2.split(' '));

// // ******* Parsing

// let magicNum = parseInt ("  42 67 is the answer");
// console.log(magicNum);

// let magicNumF = parseFloat ("42 is the answer");
// console.log(magicNumF);

// let magicNumInv = parseInt ("I am is the answer");
// console.log(magicNumInv);

// ********* Array

// let arrObj = new Array('musfique', 22, 'ICS');
// console.log(arrObj);
let arr = [4, 'gg', 9];
console.log(arr);

arr[5] = 15;
console.log(arr);
arr.reverse();
console.log(arr);
arr.push('new');
console.log(arr);
var temp = arr.pop();
console.log(arr);
// // console.log(temp);
arr.unshift('first');
console.log(arr);
arr.shift();
console.log(arr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 1, "Lemon", "Kiwi");

console.log(fruits);

fruits.splice(2, 2);
console.log(fruits);

var myArray = [1, , 3, 4];
for (el in myArray){
    console.log(myArray[el]);
}