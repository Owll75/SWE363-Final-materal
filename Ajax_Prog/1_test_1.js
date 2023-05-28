function loadData(){
    // create a new req
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    // prepare req server
    xhr.open("GET", "./data/data.txt");

    // send req
    xhr.send();

    // what to do when res arrive
    xhr.onload = ()=>{
        const container = document.getElementById("demo");
        container.innerHTML = xhr.responseText;        
    }
}