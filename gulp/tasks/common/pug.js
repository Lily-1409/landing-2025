import gulp from 'gulp'
import pug from 'gulp-pug'

import { path } from '../../config/index.js'

import { browsersync } from './browserSync.js'

export const generatePug = () =>
  gulp
    .src(path.src.pug)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(path.distFolder))
    .pipe(browsersync.stream())
