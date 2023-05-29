
document.querySelector('.box').addEventListener('click',function(e){
    document.querySelector('.box').style.background = 'red';
    console.log(e   );
}
);
let divBox = document.querySelector('.box').addEventListener('mouseleave',xyz);

document.querySelector('.box').onmouseleave = xyz;

function xyz(){
    document.querySelector('.box').style.background = 'blue';
    this.style.border='10px pink solid';
}

// ******** Remove event

// document.querySelector('.box').addEventListener('click', rem);

document.querySelector('.box').onmouseleave = null;

// function rem(){
//     console.log("Hello");
//     document.querySelector('.box').removeEventListener('mouseleave',xyz);
// }

    



// let btnAdd = document.getElementById('add');
// let btnRemove = document.getElementById('remove');
// let output = document.querySelector('h1');

// btnAdd.addEventListener('click', ()=>{
//     document.addEventListener('mousemove', handleEvent);
// });

// btnRemove.addEventListener('click', ()=>{
//     document.removeEventListener('mousemove', handleEvent);
// });

// function handleEvent(e){
//     output.innerText=`X: ${e.pageX} - Y: ${e.pageY}`;
// }


// *********

// document.getElementById('para').onclick=paraTxt;

// function paraTxt(){
//     document.getElementById('para').innerHTML='change by clcik';
// }