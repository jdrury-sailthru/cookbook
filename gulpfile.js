var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');

var sassFiles = './public/**/*.scss';

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function () {

    return gulp.src(sassFiles)
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('watch', function () {
    gulp.watch(sassFiles, ['sass']);
});
