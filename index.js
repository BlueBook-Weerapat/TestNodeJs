const http = require('http');
const port = 3000

const server = http.createServer(render).listen(3000);
console.log('connect server success at ' + port);

function render(req, res){
    res.writeHead(200,{'content-type': "text/html"});
    let html = `
    <!DOCTYPE html>
<html>
<head>
<title>test node.js</title>
</head>
<body>

<h1> node.js</h1>
<p>Node run.</p>

</body>
</html>   
    `;
    res.write(html);
    for(k in http.STATUS_CODES){res.write(`${k} : ${http.STATUS_CODES[k]} <br>`);}
    res.end();           
}