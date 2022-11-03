const http = require('http');
const url = require('url'); 
const fs = require('fs');
const port = 3000

const server = http.createServer(render).listen(3000);
console.log('connect server success at ' + port);

function render(req, res){
//    let reqUrl = url.parse(req.url,true);
        fs.readFile('index.html',(e,c)=>{
            if(!e){
            res.writeHead(200,{'content-type': "text/html"})
            res.write(c)
            }else{
            res.writeHead(404,{'content-type': "text/html"})
            res.write(e.message)
            }
            res.end()
        }
        )
}