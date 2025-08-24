import gulp from 'gulp'

import { path } from '../../config/index.js'

import { browsersync } from './browserSync.js'

export const copyPublicFolder = () =>
  gulp
    .src(path.src.public)
    .pipe(gulp.dest(path.dist.public))
    .pipe(browsersync.stream())
