var gulp = require("gulp");
var server = require("gulp-webserver");
var fs = require("fs");
var path = require("path");
var url = require("url");
gulp.task('default', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8080,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === "/favicon.ico") {
                    res.end("");
                    return
                }
                if (pathname === "/api/list") {

                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
})