/*
 * 
 *  1 gulp build 
 *      add bootastrap assets, font-awesome to source
 *      
 *  2 run gulp
 * 
 * */
 
 /* requires */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');

var config = {
    sourceDir: 'source',
    publicDir: 'public_html',
    bowerDir: 'public_html/bower_components',
    maps: 'maps'
};
var jsFiles = [
        config.sourceDir + '/js/slide-intro.js',
        config.sourceDir + '/js/fix-height.js',
        config.sourceDir + '/js/animation.js',
        config.sourceDir + '/js/inview.js',
        config.sourceDir + '/js/vertical-line.js',
        config.sourceDir + '/js/pg-slider.js'
    ];

/************** copy ***************/
/* copy 
        font-awesome
to source */
/***********************************/
gulp.task('copy:font-awesome', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/fontawesome-webfont.*')
        .pipe(gulp.dest(config.publicDir + '/fonts/awesome'));
});
gulp.task('copy:scss-awesome', function() {
    return gulp.src(config.bowerDir + '/font-awesome/scss/**.*')
        .pipe(gulp.dest(config.sourceDir + '/scss/font-awesome'));
});

/*********** scripts *********/
/* copy, minify, map, min js */
/*****************************/
gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        //.pipe(plumber())
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write(config.maps))
        .pipe(gulp.dest(config.publicDir + '/js'));
});
/********** styles ************/
/* scss to css, map, prefixer */
/******************************/
gulp.task('styles', function (){
    return sass(config.sourceDir + '/scss/style.scss', {style: 'compressed',sourcemap: true})  /* style: 'compressed' , 'expanded' */
        .pipe(plumber())
        .pipe(sourcemaps.init())
        //.on('error', sass.logError)
        .pipe(autoprefixer('last 10 versions'))              /*autoprefixer always before source maps*/
        .pipe(sourcemaps.write(config.maps))
        .pipe(gulp.dest(config.publicDir + '/css')); 
});
/****************/
/**** watch *****/
/****************/
gulp.task('watch', function (){
   gulp.watch(config.sourceDir + '/js/**/*.js', ['scripts']);
   gulp.watch(config.sourceDir + '/scss/**/*.scss', ['styles']);
});

/* copy files build*/
gulp.task('build', ['copy:font-awesome','copy:scss-awesome']);

/*****************/
/**** default ****/
/*****************/
gulp.task('default',['scripts','styles','watch']);