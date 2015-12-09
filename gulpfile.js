/* required methods */
var gulp 			= require('gulp');
var concat 			= require('gulp-concat');
var rename 			= require('gulp-rename');
var uglify 			= require('gulp-uglify');
var runSequence 	= require('run-sequence');
var watch 			= require('gulp-watch');
var sass 			= require('gulp-sass');
var browserSync 	= require('browser-sync');

/* tasks */
gulp.task('devjs', function ()
{
	return gulp.src('src/js/*.js')
		.pipe(concat('pcapAnalyzer.js'))
		.pipe(gulp.dest('src/bin/js'));
});


gulp.task('depsjs', function ()
{
	return gulp.src([
		'bower_components/modernizr/modernizr.js',
		'bower_components/jquery/dist/jquery.js',
		'bower_components/bootstrap/dist/js/bootstrap.js',
		'bower_components/angular/angular.min.js',
		'bower_components/angular-touch/angular-touch.min.js',
		'bower_components/angular-animate/angular-animate.min.js',
		'bower_components/angular-ui-grid/ui-grid.min.js',
		'bower_components/angular-ui-router/release/angular-ui-router.min.js', 
		'bower_components/ng-file-upload/ng-file-upload.min.js'])
		.pipe(concat('deps.js'))
		.pipe(gulp.dest('src/bin'));
});

gulp.task('depsDist', function ()
{
	return gulp.src(['src/bin/deps.js'])
		.pipe(rename('deps.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/bin/js'));
});


gulp.task('devcss', function ()
{
	return gulp.src([
		'bower_components/font-awesome/css/font-awesome.min.css',
		'bower_components/bootstrap/dist/css/bootstrap.min.css',
		'bower_components/angular-ui-grid/ui-grid.min.css',
		'src/css/styles.css'])
		.pipe(concat('pcapAnalyzer.css'))
		.pipe(gulp.dest('src/bin/css'));
});

gulp.task('sass', function ()
{
	return gulp.src(['src/css/styles.scss'])
		.pipe(sass())
		.on('error', console.error.bind(console))
		.pipe(gulp.dest('src/css'));
});

gulp.task('sass-watch', ['sass'], browserSync.reload);

gulp.task('watch', function ()
{
	browserSync({
		server: {
			baseDir: 'src/'
		}
	});
	gulp.watch('src/js/*.js', ['devjs']);
	gulp.watch('src/css/*.scss', ['sass-watch', 'devcss']);
});

gulp.task('default', function (callback)
{
	runSequence('devjs', 'sass', 'devcss', 'depsjs', 'depsDist', callback);
});