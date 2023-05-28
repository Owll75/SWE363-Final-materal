    const formEL = document.getElementById('myform');

    formEL.addEventListener('submit', async function(e){
        e.preventDefault();

        const formData = new FormData(formEL);

        formData.append('mark', '123');


        console.log([...formData]);
        
        // console.log(formData.get('fname'));

        
        // for(item of formData){
        //     console.log(item[0] + ": " + item[1]);
        // }

        const res = await fetch('http://httpbin.org/post',{
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded',
            //     },            
            body:formData
            // body: data
        });

        // const data = await res.json();
        // console.log(data);
    
    });















    
        // fetch('https://httpbin.org/post', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(res=>res.json())
        // .then(res=>console.log(res))
        // .then(data=>console.log(data))
