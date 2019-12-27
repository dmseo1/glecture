var http = require('http');
var fs = require('fs');

var app = http.createServer();

var port = 3000;
app.listen(3000, () => {
    console.log(`서버가 시작되었습니다: http://localhost:${port}`);
});

app.on('request', (req, res) => {
    console.log("웹에서 요청이 들어왔습니다.");
    var fileName = "./files/virtualbox.exe"
    var infile = fs.createReadStream(fileName, {flags:'r'}); //이상한 요청 들어왔을 때, 재요청하지마
    var stat = fs.statSync(fileName);
    var fileLength = stat["size"];
    var curLength = 0; //현재 크기?
    
    res.writeHead(200, {"Content-Type":"images/jpg"});
    res.write(`<html>
                <head>
                <title>다운로드 사이트</title>
                </head>
                <body>
                파일을 다운로드중입니다...
                </body>
                </html>`);

    infile.on('readable', () => {
        var chunk;
        while((chunk = infile.read()) !== null) {
            console.log(`읽어들인 데이터 크기: ${chunk.length}`);
            curLength += chunk.length;
            res.write(chunk, 'utf-8', (error) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log(`파일 부분 쓰기 완료 ${curLength}, ${fileLength}`);
                    if(curLength >= fileLength) {
                        console.log(`파일 전송 완료!`);
                        res.end();
                    }
                }
            })
        }
    })
});
