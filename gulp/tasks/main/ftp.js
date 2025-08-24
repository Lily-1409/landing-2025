import gulp from 'gulp'
import plumber from 'gulp-plumber'
import vinylFTP from 'vinyl-ftp'
import util from 'gulp-util'

import { path } from '../../config/index.js'

import { setEnvVariables } from './env.js'

const configFTP = {
    host: process.env.FTP_HOST,
    user: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    parallel: process.env.FTP_PARALLEL,
    log: util.log
}

const ftpDistFolder = process.env.FTP_DIST_FOLDER || '/html'

const uploadFtp = () => {
  const ftpConnect = vinylFTP.create(configFTP)

  return gulp
    .src(`${path.distFolder}/**/*.*`, {})
    .pipe(plumber())
    .pipe(ftpConnect.dest(ftpDistFolder))
}

export const ftp = gulp.series(setEnvVariables, uploadFtp)
