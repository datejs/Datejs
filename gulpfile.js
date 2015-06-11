var gulp     = require('gulp');
var jasmine = require('gulp-jasmine');
var runSequence = require('run-sequence');


var corefiles = ['src/globalization/en-US.js','src/core.js','src/sugarpak.js','src/parser.js','src/time.js']

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
})

gulp.task('extendedtest', function() {
	return gulp.src(corefiles.concat(extendedtests))
		.pipe(jasmine());
})

gulp.task('test', function() {
	runSequence(['coretest'],['extendedtest']);
})

gulp.task('default', ['test']);

