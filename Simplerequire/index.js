let http = require("http");
let wenjian = require("fs");
let mime = require("mime");
http.createServer(function(req, res) {
    wenjian.readFile("web" + (req.url == "/" ? "/index.html" : req.url), function(err, data) {
        res.setHeader("Content-Type", mime.getType(req.url) + ";charset=utf-8");
        res.end(data);
    })
}).listen(8888);