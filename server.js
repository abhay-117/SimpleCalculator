const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html')); // Adjust the path to point to index.html
});

app.post('/sum', (req, res) => {
    let number1 = req.body.num1;
    let number2 = req.body.num2;
    let sum1 = parseInt(number1) + parseInt(number2);
    res.send({ answer: sum1 });
});

app.post('/sub', (req, res) => {
    let number1 = req.body.num1;
    let number2 = req.body.num2;
    let sub = parseInt(number1) - parseInt(number2);
    res.send({ answer: sub });
});

app.post('/mul', (req, res) => {
    let number1 = req.body.num1;
    let number2 = req.body.num2;
    let mul = parseInt(number1) * parseInt(number2);
    res.send({ answer: mul });
});

app.post('/div', (req, res) => {
    let number1 = req.body.num1;
    let number2 = req.body.num2;
    if (number2 == 0) {
        res.send({ error: "Cannot divide by zero" });
    } else {
        let div = parseInt(number1) / parseInt(number2);
        res.send({ answer: div });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
