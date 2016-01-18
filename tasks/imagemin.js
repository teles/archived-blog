var gulp = require('gulp');
var imageop = require('gulp-imagemin');

module.exports = function() {

	var options = {
		svgoPlugins: [
		    { removeViewBox: true },
		    { removeUselessStrokeAndFill: true },
		    { removeEmptyAttrs: true }
		]
	};

    return gulp.src('src/static/svg/**/*.svg')
        .pipe(imagemin(options))
        .pipe(gulp.dest('dist/static/svg'));
};