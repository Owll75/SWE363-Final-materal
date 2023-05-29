let text = "Web Engineering";
// let text = new RegExp("Web Engineering");
let n = text.search(/[e]{2}/);
console.log(n)
// console.log(n);

// text = text.replace(/engiNeering/i, "Programming");
// console.log(text);

var str = "My favorite 6+ color is gray. Hex colorrrr code is 808080. I beleive you are not Color blind. If you are not colour blind then tell me what is your favourite colourr? or you like multiple colors?."

// var res = str.search(/[is]/i);
// console.log(res);

// const pattern = /the/i;
// console.log(pattern.test("The best things in life are free!"));

var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/gi);
console.log(res);



let namePattern = /[A-Z][a-z]+ [A-Z][a-z]+/;
console.log(namePattern.test("King Fahd University")); 

// let studentIdPattern = new RegExp("\d{1}");
// let studentIdPattern = /1\d{6}/;
// console.log(studentIdPattern.test("-1234567")); 

// var regex = /(\d{3}) (\d{3})-(\d{4})/g;
// var phone1 = "555 123-4567";
// console.log(regex.test(phone1));

// var regex = /abc+(xyz+)+/i;
// var phone2 = "+1 555 123-4567";
// console.log(regex.test("abcxyzzzzXYZ"));
// console.log(regex.test(phone1));

// var reg_email = /^[a-zA-Z0-9+_\.-]+@[a-zA-Z0-9+_\.-]+\.[a-zA-Z]{2,3}$/i;

// console.log(reg_email.test("abcdef123@gmailcom"));
// console.log(reg_email.test("abcdef123gmail."));
// console.log(reg_email.test("abcdef123@gmail.com"));
