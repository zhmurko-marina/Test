const gulp = require('gulp')
const browserSync = require('browser-sync')
const sourcemaps = require('gulp-sourcemaps')
const babelify = require('babelify')
const buffer = require('vinyl-buffer')
const browserify = require('browserify')
const source = require('vinyl-source-stream')

const config = {
  server: {
    baseDir: './'
  },
  host: 'localhost',
  port: 9000
}

function bundleJs (bundler) {
  return bundler.bundle()
    .pipe(source('all.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'))
}

gulp.task('js', () => {
  let bundler = browserify('./js/app.js', {debug: true})
    .transform(babelify, {presets: ['es2015']})
  return bundleJs(bundler)
})

gulp.task('webserver', function () {
  browserSync(config)
})

gulp.task('watchFiles', ['webserver'], function () {
  gulp.watch(['./**/*.html','./css/*.css'], browserSync.reload)
  gulp.watch('./js/**/*.js', ['js', browserSync.reload])
})

gulp.task('default', ['webserver', 'js', 'watchFiles'])
