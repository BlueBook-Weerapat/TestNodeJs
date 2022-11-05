const http = require('http');
const url = require('url'); 
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const port = 3000
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {res.sendFile(path.join(__dirname,'index.html'));});
// app.get('/:data', (req, res) => {res.send('11');});
app.get('/01', (req, res) => {res.sendFile(path.join(__dirname,'index copy 1.html'));});
app.get('/02', (req, res) => {res.sendFile(path.join(__dirname,'index copy 2.html'));});
app.get('/03', (req, res) => {res.sendFile(path.join(__dirname,'index copy 3.html'));});
app.get('/04', (req, res) => {res.sendFile(path.join(__dirname,'index copy 4.html'));});


app.all('/1', (req, res) => {
    let data = {
        index : 'FORM',
        codeName : 'EJS-FORM',
        // name : 'empty'
    }
    if (req.query.name){
        data = {
            index : 'GET',
            codeName : 'EJS-GET',
            name : req.query.name                  //get
        }    
    } 
    if (req.body.name){
        data = {
            index : 'POST',
            codeName : 'EJS-POST',
            name : req.body.name                  //post
        }    
    } 
    res.render('index01',data);
});
// app.get('/2', (req, res) => {
//     res.render('index02',{
//         index : '02',
//         codeName : 'EJS-02',
    
//     });
// });


app.use((req, res)=>{
    res.status(200)
    res.type('text/html')
    res.send('404');
    // res.redirect('/')
}).listen(port);

console.log('connect server success at ' + port);

