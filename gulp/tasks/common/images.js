import gulp from 'gulp'
import newer from 'gulp-newer'
import imagemin, { mozjpeg, optipng } from 'gulp-imagemin'
import webp from 'gulp-webp'

import { path } from '../../config/index.js'

export const generateWebp = () =>
  gulp
    .src(path.src.images)
    .pipe(newer(path.dist.webp))
    .pipe(
      webp({
        quality: 90
      })
    )
    .pipe(gulp.dest(path.dist.webp))

export const generatePictures = () =>
  gulp
    .src(path.src.images)
    .pipe(newer(path.dist.images))
    .pipe(
      imagemin([
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 5 })
      ])
    )
    .pipe(gulp.dest(path.dist.images))

export const generateImages = gulp.series(generateWebp, generatePictures)
