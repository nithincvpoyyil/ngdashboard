var appConfig = {
  server: {
    port: 7878
  }
};

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var stringify = require('stringify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
//var nodemon = require('gulp-nodemon');
var concat = require("gulp-concat");
var merge = require('merge2');
//var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');

// Task to run server from root locations
gulp.task('start-ws', function() {
  connect.server({
    root: 'public',
    port: appConfig.server.port
  })
});

// Task to build and combine all files
gulp.task('build-all', function() {
  // Grabs the app.main.js file
  return browserify('./app/app.main.js')
    // stringify all the html and append
    .transform(stringify, {
      appliesTo: {
        includeExtensions: ['.html']
      },
      minify: true
    })
    // bundles it and creates a file called main.js
    .bundle()
    .pipe(source('main.js'))
    // saves it the public/js/ directory
    .pipe(gulp.dest('./public/js/'))
    .pipe(notify({
      message: "Combined and Created Main Bundle"
    }));;
});

// minifies merged foundation js file
gulp.task('compress', function() {
  return gulp.src('./public/js/main.js')
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest('./public/js/'))
    .pipe(notify({
      message: " Main.js has minified"
    }));
});

// Task to compile and build styles from sass files
gulp.task('compile-sass', function() {

  var cssFiles = ['./node_modules/bootstrap/dist/css/bootstrap.css',
                  './node_modules/nvd3/build/nv.d3.min.css'];

  return merge(
      gulp.src(cssFiles).pipe(sourcemaps.init()),
      sass('app/styles/main.scss', {
        sourcemap: true
      })
      .pipe(sourcemaps.write())
    )
    .pipe(postcss([csswring]))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('public/css'))
    .pipe(notify({
      message: " Main.css has minified"
    }));
});

// Task to watch the file changes and rebuild-all all
gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['build-all']);
  gulp.watch('styles/main.sass', ['compile-sass']);
});

// Default task
gulp.task('default', ['create','start-ws']);

// Build for production task
gulp.task('create', ['build-all', 'compile-sass']);
