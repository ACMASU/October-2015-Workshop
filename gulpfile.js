var gulp = require('gulp');

var requires = [
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/handlebars/handlebars.min.js'
];

var scripts = './public/js'

gulp.task('copyscripts', function(){
    gulp.src(requires)
        .pipe(gulp.dest(scripts));
});

gulp.task('default', ['copyscripts']);