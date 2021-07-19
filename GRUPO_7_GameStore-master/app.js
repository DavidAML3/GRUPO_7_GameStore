const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));

app.listen(3000, ()=>{
	console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
	res.sendFile(__dirname + '/views/home.html');
});

app.get('/cart', (req,res)=>{
	res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/detail', (req,res)=>{
	res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/login', (req,res)=>{
	res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
	res.sendFile(__dirname + '/views/register.html');
});