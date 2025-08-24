import gulp from 'gulp'
import twig from 'gulp-twig'

import { path } from '../../config/index.js'

import { browsersync } from './browserSync.js'

export const generateTwig = () =>
  gulp
    .src(path.src.twig)
    .pipe(twig())
    .pipe(gulp.dest(path.distFolder))
    .pipe(browsersync.stream())
