const express = require('express');
const app = express();
const port = 8090;
// user GET / 
app.get('/user', function(req, res) {
    res.send('ok');
});

// 注册
app.post('/register', function(req, res) {
    res.send('注册');
});

// 登陆
app.post('/login', function(req, res) {
    res.send('登陆');
});

app.listen(8090, function() {
    console.log(`server started localhost:${port}`);
})