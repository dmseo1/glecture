var http = require('http');
var app = http.createServer();

var port = 3000;
app.listen(port, () => {
    console.log(`서버가 시작되었습니다: http://localhost:${port}`);
});

app.on('connection', socket => {
    var addr = socket.address();
    console.log(`클라이언트가 접속하였습니다: ${addr.address}, ${addr.family}, ${addr.port}`)
})

app.on('request', (request, response) => {
    console.log(`클라이언트에서 요청이 들어왔습니다.`);
    //console.log(request);   
    
    response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    response.write(`<!DOCTYPE html>
                    <head>
                    <title>응답 페이지</title>
                    </head>
                    <body>
                    <h3> 응답 메시지</h3>
                    <p>서버에서 온 메시지~!@~!~!~!~!~@~!@~~!@~!</p>
                    </body>
                    </html> `);
})
