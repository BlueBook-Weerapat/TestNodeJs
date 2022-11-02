const http = require('http');
const port = 3000

const server = http.createServer(render).listen(3000);
console.log('connect server success at ' + port);

function render(req, res){
    res.write(`helloworld`);
    res.end();           
}