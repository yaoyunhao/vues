var express = require("express");
var app = express();
var fs = require('fs');
var path = require("path");
app.use(express.static(path.join(__dirname, 'src')));
app.get("/", function(req, res, next) {
    res.end(fs.readFileSync("index.html"))
})
app.listen(8080);