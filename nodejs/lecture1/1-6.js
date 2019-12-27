/**
 * 다른 사이트에서 데이터를 가져오는 예제(http 활용)
 */

var http = require('http');

var options = {
    host : "www.google.com",  //가져오고자 하는 사이트
    port : 80,
    path : "/"  //호스트 뒤의 path
}   //사이트에서 내가 받아오고 싶은 정보에 대한 것. JSON 형태로 작성

var req = http.get(options, res => {    //사이트에서 정보를 받아온다
    var resData = '';   

    res.on('data', chunk => {
        resData += chunk;
    });

    res.on('end', () => {
        console.log(resData);
    });
});

req.on('error', err => {
    console.log(`에러 발생: ${err.message}`);
});