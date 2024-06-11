const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/calculation', (req, res)=>{
  res.sendFile(path.join(__dirname, 'Calculation.html'));
});

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
