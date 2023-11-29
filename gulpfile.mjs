import gulp from 'gulp';
const { src, dest, series, watch } = gulp;
import gulpsass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cssMinify from 'gulp-clean-css';
import terser from 'gulp-terser';
import * as nodesass from 'sass';

const sasscompiler = nodesass;

const sass = gulpsass(sasscompiler);


//styles
function styles(){
    return src('./assets/src/styles/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cssMinify())
    .pipe(dest('./assets/dest/styles/'))
}

//scripts
function scripts(){
    return src('./assets/src/scripts/**/*.js')
    .pipe(terser())
    .pipe(dest('./assets/dest/scripts/'));
}

function watchTask(){

    watch(
        [
            './assets/src/styles/**/*.scss',
            './assets/src/scripts/**/*.js',
        ],

        series(styles, scripts)
    )
}

export default  series(styles, scripts, watchTask);