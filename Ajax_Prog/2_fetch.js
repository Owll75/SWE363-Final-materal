
async function getData(){
    const container = document.getElementById('display');

    // ****** fetch() will send a req and return a res
    const res = await fetch("http://127.0.0.1:5500/data/data_fetch.txt");
    console.log(res);
    // const data = await res.text();

    container.innerText = await res.text();


    const res2 = await fetch("https://reqres.in/api/users");
    const users = await res2.json(); 
    console.log(users);
    console.log(users.data[2].first_name);
}