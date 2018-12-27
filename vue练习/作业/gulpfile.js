let gulp = require("gulp"),
    server = require('gulp-webserver'),
    fs = require("fs"),
    path = require('path'),
    url = require("url");
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === "/favicon.ico") {
                    res.end("");
                    return
                }
                if (pathname === '/api/list') {

                } else {
                    pathname = pathname === '/' ? "index.html" : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
})