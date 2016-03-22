var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var ignores = [
	'!./node_modules/**',
	'!./app/dist/**'
];

gulp.task('js', function () {
	return browserify({
		entries: 'app/main.jsx',
		debug: true,
	})
	.transform(babelify, {presets: ["react"]})
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./app/dist/'));
});

gulp.task('css', function () {
	return gulp.src('./app/stylesheets/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./app/dist/'));
});

gulp.task('default', ['js', 'css'], function () {
	gulp.watch([
		'./**/*.jsx',
		'./**/*.js'
	].concat(ignores), ['js']);
	gulp.watch([
		'./**/*.scss'
	].concat(ignores), ['css']);
});