
//TODO start using symlinks for gulp
const path = require('path');

const { series, parallel, src, dest } = require('gulp');

const mocha = require('gulp-mocha');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
const rename = require('gulp-rename');

const mocha_config = {
    reporter: 'progress'
};

const webpack_config = {
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'data-collection.bundle.js'
    },
    devtool: 'source-map'
};

const babel_config = {
    presets: ['@babel/env'],
    sourceMap : true,
    filename : 'test.min.js'
};

function resolve_path(){

}

function unit_tests() {
    return src('test/test.js').pipe(mocha(mocha_config));
}

function load_tests(cb){
    console.log('completed load tests');
    cb();
}

function bundle() {
    return src('index.js')
        .pipe(webpack(webpack_config))
        .pipe(dest('dist/'));
}

function transpile(){
    return src('dist/data-collection.bundle.js')
        .pipe(babel(babel_config))
        .pipe(dest('dist/min'))
}

function minify(cb) {
    console.log('minify');
    cb();
}

function build_js_docs(){
    return src('lib/**/*.js')
        .pipe(gulpJsdoc2md(/*{ template: fs.readFileSync('./README.hbs', 'utf8') }*/))
        .on('error', function (err) {
            console.error("js docs construction failed");
        })
        .pipe(rename(function (path) {
            path.extname = '.md'
        }))
        .pipe(dest('docs'));
}

function build_index_doc(){

}

const test = series(unit_tests, load_tests);
const build = series(bundle, transpile, minify);
const document = series(build_js_docs, build_index_doc);
const parallel_processes = parallel(build, document);

exports.test_min = unit_tests;
exports.test = test;
exports.build = build;
exports.document = document;

exports.default = series(test, parallel_processes);