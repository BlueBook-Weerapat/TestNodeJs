const http = require('http');
const url = require('url'); 
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const port = 3000

app.use((req, res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname, 'html/01.html'));



}).listen(port);

console.log('connect server success at ' + port);

