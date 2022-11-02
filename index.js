const http = require('http');
const server = http.createServer(function(req, res){
      res.write(`helloworld`);
      res.end();           
})
server.listen(3000);