var gulp = require('gulp'),
	sass = require('gulp-sass');
	del  = require('del')

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
});

gulp.task('watch', ['sass'], function(){
	return gulp.watch('app/sass/**/*.sass', ['sass'])
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('build', ['clean', 'sass'],function(){

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));

	var buildCss = gulp.src('app/css/**/*.css')
		.pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildImg = gulp.src('app/img/**/*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('default',['watch'])