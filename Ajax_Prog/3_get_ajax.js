// const text = '[ "Ford:1", "BMW", "Audi", "Fiat" ]';
// const myArr = JSON.parse(text);
// console.log(typeof(text));
// console.log(myArr);

const btn_get = document.getElementById('btn_get');
btn_get.addEventListener('click', getData);

async function getData(){
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();

    // console.log(res);
    console.log(data);
    console.log("data :" + data.data[0].first_name);
}

const btn_submit = document.getElementById('btn_submit');
btn_submit.addEventListener('click', submitData);

const newUser = {
    fName: 'John',
    lName: 'Smith'
};

async function submitData(){
    const res = await fetch("https://reqres.in/api/users",{
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify(newUser)
    });

    // if(res.ok){
    //     const data = await res.json();
    //     console.log("Post Data : " + data);
    // }
    
}

