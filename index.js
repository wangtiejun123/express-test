const express = require('express');
const app = express();
const port = 8090;
// user GET / 
app.get('/user', function(req, res) {
    res.send('ok');
});

app.listen(8090, function() {
    console.log(`server started localhost:${port}`);
})