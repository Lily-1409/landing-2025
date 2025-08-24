import gulp from 'gulp'
import eslint from 'gulp-eslint'
import plumber from 'gulp-plumber'
import webpack from 'webpack'
import webpackstream from 'webpack-stream'

import webpackconfig from '../../../webpack.config.js'
import { path } from '../../config/index.js'

import { browsersync } from './browserSync.js'

export const lintJs = () =>
  gulp
    .src([path.src.js, './gulpfile.js'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())

export const distJs = () =>
  gulp
    .src([path.src.js])
    .pipe(plumber())
    .pipe(webpackstream(webpackconfig, webpack))
    .pipe(gulp.dest(path.dist.js))
    .pipe(browsersync.stream())

export const generateJs = gulp.series(lintJs, distJs)
