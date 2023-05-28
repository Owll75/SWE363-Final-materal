const express = require('express');

const app = express();
app.use(express.json());

app.listen(3000);

const customers = [
    {id: 1, name: 'Musfique'},
    {id: 2, name: 'Anwar'},
    {id: 3, name: 'Trump'}
];

app.get('/customers', (req, res)=>{
    res.send(customers);
});

app.get('/customers/:id', (req, res)=>{
    // res.send(req.params.id);
    const custtomerExit = customers.find(c=> c.id === parseInt(req.params.id));

    if(!custtomerExit){
        res.status(404).send("This customer is not found");
    }

    if(custtomerExit){
        res.send(custtomerExit);
    }

});

app.post('/customers', (req, res)=>{
    // console.log(customers.length);
    // res.send(JSON.stringify(customers.length));
    const newCustomer={
        id: customers.length + 1,
        name: req.body.name
    };
    customers.push(newCustomer);
    res.send(newCustomer);
});

app.put('/customers/:id', (req, res)=>{
    const custtomerExit = customers.find(c=> c.id === parseInt(req.params.id));

    if(!custtomerExit){
        res.status(404).send("This customer is not found");
    }

    if(custtomerExit){
        custtomerExit.name = req.body.name;
        res.send(custtomerExit);
    }
});

app.delete('/customers/:id', (req, res)=>{
    const custtomerExit = customers.find(c=> c.id === parseInt(req.params.id));

    if(!custtomerExit){
        res.status(404).send("This customer is not found");
    }

    if(custtomerExit){
        const index = customers.indexOf(custtomerExit);
        // console.log(index);
        // res.send("Hello");
        customers.splice(index, 1);
        res.send(custtomerExit);
    }
});