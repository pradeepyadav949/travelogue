const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',function (req, res){
    res.redirect('/home.html');
})

app.get('/home.html', function (req, res) {
    res.sendFile( __dirname + "/home.html" );
})

app.get('/aboutus.html', function (req, res) {
    res.sendFile( __dirname + "/aboutus.html" );
})

app.get('/contactus.html', function (req, res) {
    res.sendFile( __dirname + "/contactus.html" );
})

app.get('/openings.html', function (req, res) {
    res.sendFile( __dirname + "/openings.html" );
})

app.get('/login.html', function (req, res) {
    res.sendFile( __dirname + "/login.html" );
})

app.get('/balitrip.html', function (req, res) {
    res.sendFile( __dirname + "/balitrip.html" );
})

app.get('/manalitrip.html', function (req, res) {
    res.sendFile( __dirname + "/manalitrip.html" );
})

app.get('/singaporetrip.html', function (req, res) {
    res.sendFile( __dirname + "/singaporetrip.html" );
})

app.get('/loginsuccess.html', function (req, res) {
    res.sendFile( __dirname + "/loginsuccess.html" );
})

app.listen(3000, function () {
    console.log("Server is running on localhost:3000");
});
 



