var http = require('http');
var fs = require('fs');

var app = http.createServer();

var port = 3000;
app.listen(port, () => {
    console.log(`서버가 시작되었습니다: http://localhost:${port}`);
});

app.on('connection', socket => {
    
});

app.on('request', (request, response) => {
    console.log("클라이언트로부터 요청이 들어왔습니다.");
    var fileName = './images/horse.jpg';
    var infile = fs.createReadStream(fileName, {flags:'r'});
    infile.pipe(response); //바로 보여주는 메소드

})