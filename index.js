const http = require('http');
const server = http.createServer((req, res)=>{
      res.write(`helloworld`);
      res.end();           
}).listen(3000);
console.log('connect server success');