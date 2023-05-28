// *** setTimeout

// setTimeout(()=>{
//     console.log("KFUPM")
// }, 3000);

// setTimeout(xyz, 3000);

// function xyz(){
//     console.log("Hello Web Eng.");
// }

// function multiply(a, b) {
//      alert(a * b);
// }

// setTimeout(multiply, 3000, 20, 10);

var c = 0;

function abc(){
    c++;
    console.log("Hello Web Eng. - " + c);
    
    if(c==5){
        clearInterval(timerID);
    }
}

var timerID = setInterval(abc, 1000);
