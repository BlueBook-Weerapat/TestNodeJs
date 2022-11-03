const http = require('http');
const url = require('url'); 
const fs = require('fs');

const express = require('express');
const app = express();

const port = 3000

app.use((req, res)=>{res.send('node')}).listen(port);

console.log('connect server success at ' + port);

