// async function sendData(){
    const formEL = document.getElementById('myform');

    formEL.addEventListener('submit',  function(e){
        // console.log("hello");
        e.preventDefault();

        const formData = new FormData(formEL);
        // console.log([...formData]);
        // console.log(formData.get('fname'));
        // const data = new URLSearchParams(formData);

        const result =  fetch('http://httpbin.org/post',{
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded',
            //     },            
            body:formData
            // body: data
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))

        // console.log(result.json());
        // console.log(data);
    });
