var app = require('http').createServer();
var port = 3000;
app.listen(port, () => {
    console.log(`웹 서버가 시작되었습니다: http://localhost:${port}`);     
});

app.on('connection', socket => {
    var addr = socket.address();
    console.log("클라이언트가 접속했습니다. : %s %d", addr.address, addr.port);   
})