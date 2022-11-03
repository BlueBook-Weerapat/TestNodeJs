const http = require('http');
const url = require('url'); 
const fs = require('fs');
const port = 3000

const server = http.createServer(render).listen(3000);
console.log('connect server success at ' + port);

function render(req, res){
    res.writeHead(200,{'content-type': "text/html"})
   let reqUrl = url.parse(req.url,true);
    // with (reqUrl){
        res.write(`
        path: ${reqUrl.path} <br />
        pathname: ${reqUrl.pathname}<br />
        search: ${reqUrl.search}<br />                                         
        
        `)
        for (element in reqUrl.query){
            res.write(`${element} : ${reqUrl.query[element]}<br />`)
        };
        res.end()
}