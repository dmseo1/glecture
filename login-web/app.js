var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('html', require('ejs'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));    //다국어 사용
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./router'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); //response할 때 헤더에 자동으로 붙임

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`서버가 시작되었습니다: http://localhost:${port}`);
});