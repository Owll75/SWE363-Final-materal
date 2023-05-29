const body = document.body;

console.log(body);
console.log(body.firstChild.nextSibling);
console.log(body.firstElementChild.firstChild.nextSibling.firstChild.parentNode);
console.log(body.firstElementChild.childNodes[2].textContent);
console.log(body.firstElementChild.childNodes[0]);