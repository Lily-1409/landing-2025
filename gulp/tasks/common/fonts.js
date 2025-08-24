import gulp from 'gulp'

import { path } from '../../config/index.js'

import { browsersync } from './browserSync.js'

export const generateFonts = () =>
  gulp
    .src(path.src.fonts)
    .pipe(gulp.dest(path.dist.fonts))
    .pipe(browsersync.stream())
