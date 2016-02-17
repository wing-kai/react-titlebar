'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const rename = require('gulp-rename');

const onError = err => {
    notify.onError({
        title: "编译出错",
        message: err.message.replace(/.+\/(.+\.(jsx|js).+)/g, '$1'),
        sound: "Beep"
    })(err);
};

gulp.task('script', function () {
    gulp.src(['src/*.js', 'src/*.jsx']).pipe(plumber({
        errorHandler: onError
    })).pipe(babel({
        compact: false,
        presets: ["react"],
        plugins: [
            "transform-es2015-destructuring",
            "transform-es2015-spread",
            "transform-strict-mode"
        ]
    })).pipe(plumber({
        errorHandler: onError
    })).pipe(rename({
        extname: '.js'
    })).pipe(gulp.dest('asset'));

    gulp.src(['src/titlebar.jsx']).pipe(plumber({
        errorHandler: onError
    })).pipe(babel({
        compact: false,
        presets: ["react"],
        plugins: [
            "transform-es2015-destructuring",
            "transform-es2015-spread",
            "transform-strict-mode"
        ]
    })).pipe(plumber({
        errorHandler: onError
    })).pipe(rename({
        extname: '.js'
    })).pipe(gulp.dest('lib'));
});

gulp.task('watch', function () {
    gulp.watch(['src/*.js', 'src/*.jsx'], ['script']);
});

gulp.task('default', ['script', 'watch']);