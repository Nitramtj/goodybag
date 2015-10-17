var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('webpack');

gulp.task('dist', function() {
	var config = require('./webpack.config');
	
	webpack(config, function(err, stats) {
	});
});

gulp.task('lib', function() {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('lib'));
});

gulp.task('default', ['dist', 'lib']);