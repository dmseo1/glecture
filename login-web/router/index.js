var router = require('express').Router();
var mysql = require('mysql');

var db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PW,
    port: process.env.DB_PORT
})
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    var sql = "INSERT INTO users(first_name, email, password, created, modified) VALUES(?, ?, ?, NOW(), NOW())";
    db.query(sql, [req.body.name, req.body.email, req.body.password], (err, result) => {
        if(!err) {
            console.log(result);
            res.redirect('login');
        } else {
            console.log(err);
        }
    });
});

router.post('/login', (req, res) => {
    var id = req.body.name;
    console.log("id: " + id);
    var password = req.body.password;
    var sql = "SELECT * FROM users WHERE first_name=?";
    db.query(sql, [id], (err, result) => {
        if(!err) {
            console.log(result);
            if(result.length == 0) {
                console.log("정보 없음");
            } else {
                if(id == result[0].first_name && password == result[0].password) {
                    console.log("Success");
                } else {
                    console.log("Failed");
                }
            }
           
        } else {
            console.log(err);
        }
    });
    res.render('login');
});

router.get('/login', (req, res) => {
    res.render('login');
});


module.exports = router;