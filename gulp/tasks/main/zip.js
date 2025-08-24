import gulp from 'gulp'
import { deleteAsync } from 'del'
import gulpZip from 'gulp-zip'
import plumber from 'gulp-plumber'

import { path } from '../../config/index.js'

const ZIP_NAME = 'build.zip'

export const zip = () => {
  deleteAsync(`./${ZIP_NAME}`)

  return gulp
    .src(`${path.distFolder}/**/*.*`, {})
    .pipe(plumber())
    .on('error', function (err) {
      console.log(err.toString())

      this.emit('end')
    })
    .pipe(gulpZip(ZIP_NAME))
    .pipe(gulp.dest('./'))
}
