const button = document.querySelector('#btn');

button.addEventListener('click', ()=>{
    console.log("First button clicked");
});

button.addEventListener('click', ()=>{
    console.log("Second button clicked");
});

button.onclick = ()=>{
    console.log("First event handler");
}

button.onclick = ()=>{
    console.log("Second event handler");
}