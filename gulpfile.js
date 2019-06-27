var gulp = require("gulp");
var connect = require("gulp-connect");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var cleanCss = require("gulp-clean-css");
var babel = require("gulp-babel");
//上线版本dist 开发版本
gulp.task("copyHtml", function() {
    gulp.src("*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload())
});
gulp.task("copyImag", function() {
    gulp.src("img/**")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());
});

gulp.task("copyJs", function() {
    gulp.src("js/*.js")
        //.pipe(concat("min.js"))
        // .pipe(gulp.dest("dist/js"))
        // .pipe(connect.reload());
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
})
gulp.task("cleanCss", function() {
    gulp.src("css/*.css")
        .pipe(cleanCss())
        .pipe(gulp.dest("dist/css"))
})
gulp.task("babel", function() {
    gulp.src("js/*.js")
        .pipe(babel({ "presets": ["es2015"] }))
        .pipe(gulp.dest("dist/js"))
})
gulp.task("watch", function() {
    gulp.watch("*.html", ["copyHtml"]);
    gulp.watch("img/*", ["copyImag"]);
    //gulp.watch("sass/*.scss", ["sass"]);
    gulp.watch("css/*.css", ["cleanCss"]);
    gulp.watch("js/*.js", ["copyJs"])
});
//搭建gulp服务器 打开上线文件
gulp.task('server', function() {
    connect.server({
        root: "dist",
        livereload: true
    })
})

//全部copy命令
gulp.task("build", ["copyHtml", "copyImag", "copyJs", "cleanCss"]);
//该命令同时打开gulp服务器 和 文件监听 服务器显示随文件改变 改变
gulp.task("default", ["server", "watch"]);