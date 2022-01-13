const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto 3000');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/productDetails', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetails.html');
});

app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/whoWeAre', (req,res)=>{
    res.sendFile(__dirname + '/views/whoWeAre.html');
});