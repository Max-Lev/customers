var express = require("express");
var app = express();

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get('*', function (req, res) {
    res.sendfile(__dirname + '/dist/index.html');
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

