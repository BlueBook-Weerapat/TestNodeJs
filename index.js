const http = require('http');
const fs = require('fs');
const port = 3000

const server = http.createServer(render).listen(3000);
console.log('connect server success at ' + port);

function render(req, res){
    let ctype = {'content-type': "text/html"}
    fs.readFile('index.html', (err,content)=>{
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