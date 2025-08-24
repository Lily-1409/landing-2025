import gulp from 'gulp'
import favicons from 'gulp-favicons'

import { path } from '../../config/index.js'

export const generateFavicons = () =>
  gulp
    .src(path.src.favicon)
    .pipe(
      favicons({
        appName: process.env.APP_NAME,
        appShortName: process.env.APP_SHORT_NAME,
        appDescription: process.env.APP_DESCRIPTION,
        developerName: process.env.APP_DEVELOPER_NAME,
        developerURL: process.env.APP_DEVELOPER_URL,
        background: '#ffffff',
        path: 'favicons/',
        url: '',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        version: 1.0,
        logging: false,
        html: 'index.html',
        pipeHTML: true,
        replace: true
      })
    )
    .pipe(gulp.dest(path.dist.favicon))
