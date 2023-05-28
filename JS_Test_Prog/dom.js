// console.log(document);

// ***** Accessing DOM Nodes

// console.log(document.getElementsByTagName('h1'));
// console.log(document.getElementsByClassName('h1class'));
// console.log(document.getElementById('h1id2'));
// console.log(document.getElementsByName('firstH1'));

// console.log(document.querySelector('.h1class'));
// console.log(document.querySelectorAll('.h1class'));

// document.getElementById('h1id1').innerHTML = 'change by ID';
// document.getElementById('h1id1').innerText ="This is heading 1";

// document.getElementById('h1id1').innerHTML = 'Add <i> italic </i> text';
// document.getElementById('h1id1').innerText = 'Add <i> italic </i> text';

// ****** change element content
let h1 = document.getElementById('h1id1');

// h1.remove();

// ***** change element style
// h1.style.background = 'red';
// h1.style.color = "white";

let head2 = document.getElementsByTagName('h1');
head2[1].style.color="green";

let btn = document.querySelector('.btnclass');
btn.innerText = "change me";

let btnbyID = document.querySelector('#btnid');
// btnbyID.innerHTML="change by button ID";

// ******* change attribute value by function
// btnbyID.setAttribute("disabled", true);

// ******* change attribute value directly
// btnbyID.disabled=true;

let all = document.querySelectorAll('.item');
all[0].style.color='blue';

// let ul = document.querySelector('.items');
// ul.style.color='red';

// ****** End of this

// ul.firstElementChild.style.background='green';
// ul.lastElementChild.style.color='red';
// ul.children[2].textContent='change text';
// ul.children[1].style.color='magenta';

// let ul2 = document.querySelector('.items>li');

// // *********** Difference between HTML collection and NodeList

// //Get items by class name (two ways)
// const itemsByTagName = document.getElementsByTagName('li');
// const itemsByQuerySelector = document.querySelectorAll('.item');

// console.log('First console log', itemsByTagName, itemsByQuerySelector);

// //get UL element
// const list = document.getElementsByClassName('items');

//  console.log(list);
// //adding the fourth element
// // list.innerHTML += `<li class="item">Fifth Item</li>`;

// var node = document.createElement('li');
// node.appendChild(document.createTextNode('Scooter'));

// // console.log(document.querySelector('ul'));
// document.querySelector('ul').appendChild(node);

// console.log('Second console log', itemsByTagName, itemsByQuerySelector);

// // *********** End of Difference between HTML collection and NodeList

// var div1 = document.getElementsByTagName('div');
// console.log(div1[0].getElementsByTagName('p')[0]);
// document.write(div1[0].getElementsByTagName('p')[0].innerHTML='I am para in div');