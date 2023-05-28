let person={
    fname: 'Musfique',
    lname: 'Anwar',
    age: 40,
    "hobbies":['read', 'write'],
    address:{
        city:'Dhaka',
        zipcode: 1342
    }
}

person.hobbies[2]="DDD";
console.log(person);
console.log(person.lname);
// console.log(person['lname']);
// console.log(person.age);

// person.age=68;

// console.log(person);

console.log(person.hobbies[1]);
console.log(person.address.city);

console.log(Object.keys(person));

// person.subject='CSE';

// console.log(person);

// person['final exam']='Web Eng.';
// console.log(person);

// delete person['age'];
// console.log(person);

// var factorial2 = function foo (x) {
// Same as function foobar(x)
//     if(x <=1 ){
//         return 1;
//     }
//     return x * factorial2( x- 1);
// }

// console.log(factorial2(4));
// console.log(foo(4));
// console.log(typeof(factorial2));
// console.log(factorial2);