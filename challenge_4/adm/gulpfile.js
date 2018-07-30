const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const refresh = require('gulp-refresh');

gulp.task('css', () => {
  return gulp.src('src/stylus/screen.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('html', () => {
  return gulp.src('src/views/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
  refresh.listen()
  gulp.watch('src/stylus/screen.styl', ['css'])
})

gulp.task('default', ['css','html','watch']);
