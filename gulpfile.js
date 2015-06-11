var gulp     = require('gulp');
var jasmine = require('gulp-jasmine');
var Specification = require('./test/scripts/specification-converter.js');


gulp.task('default', function () {
    gulp.src(['src/globalization/en-US.js','src/core.js','src/sugarpak.js','src/parser.js','src/time.js','test/core/index.js'])
        .pipe(jasmine());
});