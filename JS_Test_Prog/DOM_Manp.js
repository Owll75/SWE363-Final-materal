
// *** adding elements
var escapeHtml = require('escape-html');
const body=document.body;
// var str = "change <i>text hh</i>";
document.querySelectorAll('h2')[0].innerHTML="change <i>text hh</i>";

// body.append("Hello World Child"); 
// body.append("Hello World another", " from second text");

const div = document.createElement("div");
div.innerText = "Hello inner Text";
// // // // // div.textContent = "Hello Text Content";
body.append(div);


const div2 = document.querySelector('#div2');
// console.log(div2.textContent);
// console.log(div2.innerText);

// const spanNew = document.createElement('span');
// spanNew.innerHTML = " I am added ";
// console.log(div2.children[0]);
// div2.insertBefore(spanNew, div2.children[1]);


// ****** innerHTML --- adding HTML
// const div = document.createElement("div");
// div.innerHTML = "<h2>Hello inner HTML</h2>";
// body.append(div);

// ***** remove element

const kk = document.querySelector('#kk');
// var ww = document.querySelector('#ww');

//  kk.remove();
// div2.append(kk);

// ******* remove child from parent

// div2.removeChild(kk);
// div2.remove();


// **** Modify attribute

console.log(kk.getAttribute('id'));
console.log(kk.id);

// kk.setAttribute('id','xyz');

// const dd = document.querySelector('#xyz');
// dd.id='PQR';

// ****** remove attribute

// kk.removeAttribute('id');

// ******* modifying style property

kk.style.color='red';
// background-color => backgroundColor (camal case)
kk.style.backgroundColor='cyan';

// kk.setAttribute('style','color:green'); // NOT recommended

console.log(div2.classList);
div2.classList.add('dd3');
div2.classList.remove('dd2');
div2.classList.toggle('dd1');