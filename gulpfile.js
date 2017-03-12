var gulp           = require('gulp'),
    browserSync    = require('browser-sync').create(),
    rigger         = require('gulp-rigger'),
    svgSprite      = require('gulp-svg-sprite'),
    baseDir        = 'src/assets/images/sprite',   // <-- Set to your SVG base directory
    svgGlob        = '**/*.svg',       // <-- Glob to match your SVG files
    outDir         = 'src/',     // <-- Main output directory
    config       = {
        "dest": "./barbiture.github.io",
        "log": "info",
        "shape": {
            "spacing": {
                "box": "padding",
                "padding": 5
            }
        },
        "mode": {
            "css": {
                "dest": "assets/images",
                "common": "icons",
                "sprite": "sprite.svg",
                "bust": false,
                "render": {
                    "scss": {
                        "template": "src/tpl/sprite-template.scss",
                        "dest": "../../sass/variables/sprite"
                    }
                }
            }
        }
    };

gulp.task('svgsprite', function() {
  return gulp.src(svgGlob, {cwd: baseDir})
  // .pipe(plumber())
  .pipe(svgSprite(config)).on('error', function(error){ console.log(error); })
  .pipe(gulp.dest(outDir));
});

// svg
gulp.task('svg', ['svgsprite'], function(){
  gulp.src('src/assets/images/sprite.svg')
  .pipe(gulp.dest('dist/images/'))
  .pipe(browserSync.stream());
});

//HTML
gulp.task('html', function(){
  gulp.src('./src/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('./barbiture.github.io'))
    .pipe(browserSync.stream());
});
// fonts
gulp.task('fonts', function(){
  gulp.src('src/assets/fonts/**/*.*')
  .pipe(gulp.dest('dist/fonts/'))
  .pipe(browserSync.stream());
});
// img
gulp.task('img', function(){
  gulp.src('src/assets/images/**/*.*')
  .pipe(gulp.dest('dist/images/'))
  .pipe(browserSync.stream());
});
gulp.task('build', ['html', 'fonts', 'img', 'svgsprite', 'svg']);

gulp.task('default', ['build', 'watch', 'serve']);

gulp.task('serve', ['watch'], function (){
  browserSync.init({
    server: {
      baseDir: "./barbiture.github.io"
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
  gulp.watch('src/fonts/**/*.*', ['fonts']);
  gulp.watch('src/**/*.html', ['html']);
});