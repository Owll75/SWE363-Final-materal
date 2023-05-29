const button = document.querySelector('#btn');

button.addEventListener('click', ()=>{
    console.log("First button clicked");
});

button.addEventListener('onmouseleave', ()=>{
    console.log("sssss button clicked");
});

button.onclick = ()=>{
    console.log("First event handler");
}

button.onclick = ()=>{
    console.log("Second event handler");
}