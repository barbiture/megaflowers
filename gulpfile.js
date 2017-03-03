var gulp           = require('gulp'),
    browserSync    = require('browser-sync').create(),
    rigger         = require('gulp-rigger');


//HTML
gulp.task('html', function(){
  gulp.src('./src/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('./src/template'))
    .pipe(browserSync.stream());
});


gulp.task('build', ['html']);

gulp.task('default', ['build', 'watch', 'serve']);

gulp.task('serve', ['watch'], function (){
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    host: "localhost",
    port: 8080,
    tunnel: false,
    directory: true,
    browser: ""
  });
});

//+----------------------------------------------------------------+//

gulp.task('watch', function(){
  gulp.watch('src/**/*.html', ['html']);
});