import gulp from 'gulp'

import { path } from '../../config/index.js'

import { startBrowserSync } from '../common/browserSync.js'
import { generateTwig } from '../common/twig.js'
import { generatePug } from '../common/pug.js'
import { generateHtml } from '../common/html.js'
import { generateJs } from '../common/js.js'
import { generateCss } from '../common/scss.js'
import { generateImages } from '../common/images.js'
import { generateFonts } from '../common/fonts.js'
import { generateFavicons } from '../common/favicons.js'
import { generateIcons } from '../common/icons.js'
import { copyPublicFolder } from '../common/copy.js'

import { build } from './build.js'

const watchFiles = () => {
  gulp.watch(path.watchSrc.twig, generateTwig)
  gulp.watch(path.watchSrc.pug, generatePug)
  gulp.watch(path.watchSrc.html, generateHtml)
  gulp.watch(path.src.js, generateJs)
  gulp.watch(path.src.scss, generateCss)
  gulp.watch(path.src.images, generateImages)
  gulp.watch(path.src.fonts, generateFonts)
  gulp.watch(path.src.icons, generateIcons)
  gulp.watch(path.src.favicon, generateFavicons)
  gulp.watch(path.src.public, copyPublicFolder)
}

export const watch = gulp.parallel(watchFiles, startBrowserSync)
