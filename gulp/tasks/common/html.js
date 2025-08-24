import gulp from 'gulp'

import { path } from '../../config/index.js'

import { browsersync } from './browserSync.js'

export const generateHtml = () =>
  gulp
    .src(path.src.html)
    .pipe(gulp.dest(path.distFolder))
    .pipe(browsersync.stream())
