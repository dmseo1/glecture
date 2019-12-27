var app = require('http').createServer();
var port = 3000;
app.listen(port, () => {
    console.log(`웹 서버가 시작되었습니다: http://localhost:${port}`);     
});

app.on('connection', socket => {
<<<<<<< HEAD
    var addr = socket.address();    //connection address
    console.log("클라이언트가 접속했습니다. : address: %s port: %d", addr.address, addr.port); 
    console.log(`클라이언트가 접속했습니다. ${addr.address}, ${addr.family}, ${addr.port}`);  
});

app.on('request', (request, response) => {  //(request, response, next)
    console.log(`웹 클라이언트에서 요청이 들어왔습니다`);
    console.log(request);
=======
    var addr = socket.address();
    console.log("클라이언트가 접속했습니다. : %s %d", addr.address, addr.port);   
>>>>>>> 87e92930c512921253dbbc63283cd68ee631a932
})