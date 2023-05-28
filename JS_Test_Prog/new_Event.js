function xyz(sourceElement, arg1, arg2, arg3){
    // let x = document.getElementById('testid');
    // x.innerHTML = "I am set by click";
    // x.style.color='green';
    
    console.log("source element: " + sourceElement);
    sourceElement.innerHTML='hi I am source: ' + arg2 ;
    console.log("sum: " + (arg1+arg2+arg3));
}

function getMonth(e){
    console.log(e.target);
    let sel = document.getElementById('month').value;
    document.getElementById('monthName').innerHTML=sel;
    document.getElementById('monthName').style.color='red';
}


let month = document.getElementById('month').onchange=getMonth;

// let month = document.getElementById('month').addEventListener('change', getMonth);

// let month = document.getElementById('month').addEventListener('change', ()=>{
//     let sel = document.getElementById('month').value;
//     // console.log(e.target);
//     document.getElementById('monthName').innerHTML=sel;
//     document.getElementById('monthName').style.color='red';
// });






// console.log(document.querySelector('#btn2'));

// document.querySelector('#btn2').onclick=process;

// function process(event){
//     console.log(event.target);

// }


// function changeUP(){
//     // console.log('hello');
//     const txtC = document.getElementById('txt');
//     txtC.value=txtC.value.toUpperCase();
// }


// function changeColor(sourceElement){
//     sourceElement.style.color='red';
// }

// const paraC = document.querySelector("#monthName");
// console.log(paraC);

// function greet(event) {
//   console.log("greet:", event);
//   paraC.innerHTML='change by event clcik';
// }

//  paraC.onclick = greet;
