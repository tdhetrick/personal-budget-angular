const express = require('express');
const app = express();
const port = 3000;

const budget = {
    theBudget: [
        {
            title: 'Eating out',
            budget: 250
        },
        {
            title: 'Rent',
            budget: 2750
        },
        {
            title: 'Grocery',
            budget: 500
        },
    ]
};

app.use('/', express.static('public'));

app.get('/hello',(req,res) => {
    res.send('Hello World!?');
});

app.get('/budget',(req,res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});