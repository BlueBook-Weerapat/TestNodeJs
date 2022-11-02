const http = require('http');
const fs = require('fs');
const port = 3000

const server = http.createServer(render).listen(3000);
console.log('connect server success at ' + port);

function render(req, res){
    let url = req.url
    url = (url.endsWith('/')) ? url:url +`/`
    let flieName;
    switch(url){
        case `/`:flieName ='index.html';break
        case `/01/`:flieName ='index copy 1.html';break
        case `/02/`:flieName ='index copy 2.html';break
        case `/03/`:flieName ='index copy 3.html';break
        default :flieName = 'index copy 4.html'

    }
    let ctype = {'content-type': "text/html"}
    fs.readFile(flieName, (err,content)=>{
        if(!err){
            res.writeHead(200,ctype)
            res.write(content)
        }else{
            res.writeHead(404,ctype)
            res.write(err.message)
        }
        return res.end()    
    })
}