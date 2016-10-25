// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res) {
    res.send('Hello')
});

// app.get("success", (req, res) => {
//     res.send("<h1>Your Form was Submitted Successfully</h1>");
// });

app.post("/formsubmit", (req, res) => {
    res.redirect("/success.html");
    console.log("The form has been Submitted");
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function() {
    console.log('Server running on port ' + port);

})
