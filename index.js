const http = require('http');
const url = require('url'); 
const fs = require('fs');
const path = require('path');

const express = require('express');
const { randomFillSync } = require('crypto');
const app = express();

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
    
});
app.get('/01', (req, res) => {res.sendFile(path.join(__dirname,'index copy 1.html'));});
app.get('/02', (req, res) => {res.sendFile(path.join(__dirname,'index copy 2.html'));});
app.get('/03', (req, res) => {res.sendFile(path.join(__dirname,'index copy 3.html'));});
app.get('/04', (req, res) => {res.sendFile(path.join(__dirname,'index copy 4.html'));});


app.use((req, res)=>{
    res.status(200)
    res.type('text/html')
    // res.send('404');
    res.redirect('/')
}).listen(port);

console.log('connect server success at ' + port);

