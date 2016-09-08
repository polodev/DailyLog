var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
 
gulp.task('home', function () {
  return gulp.src('./home.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('hyperblue', function () {
  return gulp.src('./css/theme-hyperblue.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});


gulp.task('watch',   function () {
	gulp.watch('./home.less', ['home']);
	gulp.watch('./css/theme-hyperblue.less', ['hyperblue']);
	})
gulp.task('default', ['home', 'hyperblue'])