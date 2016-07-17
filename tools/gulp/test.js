'use strict';

var gulp = require('gulp');
var KarmaServer = require('karma').Server;

/**
 * Задача реализующая однократный запуск unit-тестов
 */
gulp.task('test', ['preserve'], function (done) {
    new KarmaServer({
        configFile: __dirname + '/../../karma.config.js',
        singleRun: true
    }, done).start();
});