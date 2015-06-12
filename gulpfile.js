var fs		= require('fs');
var gulp     = require('gulp');
var jasmine = require('gulp-jasmine');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var merge = require('merge-stream');

var gloablizationDir = 'src/globalization/';
var basefiles = ['src/core.js','src/sugarpak.js','src/parser.js','src/time.js'];
var corefiles = [gloablizationDir+'en-US.js'].concat(basefiles);
var globalizationFiles = fs.readdirSync(gloablizationDir);

var coretests = [ 
		 'test/core/index.js', 
		 'test/date/index.js', 
		  'test/date_and_time/index.js', 
		  'test/date_math/index.js', 
		  'test/dst/index.js', 
		  'test/parseExact/index.js', 
		  'test/partial/index.js', 
		  'test/relative/index.js', 
		  'test/relative_date_and_time/index.js', 
		  'test/time/index.js', 
		  'test/tostring/index.js' 
		];

var extendedtests = [		
		  'test/rememberthemilk/index.js', 
		  'test/ruby_chronic/index.js', 
		  'test/sugarpak/index.js', 
		];


gulp.task('coretest', function() {
	return gulp.src(corefiles.concat(coretests))
		.pipe(jasmine());
});

gulp.task('extendedtest', function() {
	return gulp.src(corefiles.concat(extendedtests))
		.pipe(jasmine());
});

gulp.task('buildCore', ['coretest'], function() {
	return gulp.src(corefiles)
	.pipe(sourcemaps.init())
    .pipe(concat('date.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'))
});

gulp.task('buildGlobal', ['coretest'], function() {
	var tasks = globalizationFiles.map(function(culture){
		var files = [gloablizationDir + culture].concat(basefiles);
		return pipeline(files, culture);
	});

	return merge(tasks);
});

function pipeline(files, culture) {
	return gulp.src(files)
	//  .pipe(sourcemaps.init())
    .pipe(concat(culture ? 'date-'+culture : 'date.js'))
  	//  .pipe(uglify())
  	//  .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'))
}

gulp.task('test', function() {
	runSequence(['coretest'],['extendedtest']);
});




gulp.task('default', ['buildCore','buildGlobal']);

