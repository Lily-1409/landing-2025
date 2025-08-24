import gulp from 'gulp'
import * as sass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import plumber from 'gulp-plumber'

import { path } from '../../config/index.js'

import { browsersync } from './browserSync.js'

export const useGulpSass = gulpSass(sass)

export const generateCss = () => {
  return gulp
    .src(path.src.scss)
    .pipe(plumber())
    .pipe(
      useGulpSass({
        outputStyle: 'expanded',
        includePaths: ['node_modules']
      })
    )
    .on('error', function (err) {
      console.log(err.toString())

      this.emit('end')
    })
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(path.dist.scss))
    .pipe(browsersync.stream())
}
