var gulp = require('gulp');
var imageop = require('gulp-image-optimization');

module.exports = function() {
    gulp.src(['images/**/*.png','images/**/*.jpg','images/**/*.gif','images/**/*.jpeg', '!images/minified/**/**'])
    	.pipe(imageop({
        	optimizationLevel: 5,
        	progressive: true,
        	interlaced: true
    })).pipe(gulp.dest('images/minified')).on('end', cb).on('error', cb);
};