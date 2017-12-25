var gulp = require('gulp');
var spawn = require('child_process').spawn;
var node;

gulp.task('default', ['watch', 'server']);

gulp.task('server', function() {
    if (node) node.kill()
    node = spawn('node', ['bin/www'], {stdio: 'inherit'})
    node.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
})

gulp.task('watch', function () {
    gulp.watch('**/*.js', ['server']);
})

process.on('exit', function() {
    if (node) node.kill()
})