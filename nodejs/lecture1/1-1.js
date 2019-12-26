var http = require('http');
//nodejs를 설치하는 순간 깔려있는 라이브러리. node_modules이 아닌 C:\ 의 어딘가에 깔려 있다.
var server = http.createServer();   //서버를 만드는 메소드
var port = 8080;    //for 재사용성
server.listen(port, function() {    //서버를 대기 상태로 만드는 메소드
    console.log(`Server is started: http://localhost:${port}`);
}); //콜백 함수를 listen 메서드가 정상적으로 수행되었는지 확인하는 용도로 사용, 오류가 발생하면 실행되지 않는 메소드

server.on('connection', function(socket) {
    var addr = socket.address();
    
});

