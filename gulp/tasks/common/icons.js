import gulp from 'gulp'
import plumber from 'gulp-plumber'
import svgSprite from 'gulp-svg-sprite'

import { path } from '../../config/index.js'

export const generateIcons = () =>
  gulp
    .src(path.src.icons)
    .pipe(plumber())
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            inline: true,
            sprite: '../icons.svg'
          }
        }
      })
    )
    .pipe(gulp.dest(path.dist.images))
