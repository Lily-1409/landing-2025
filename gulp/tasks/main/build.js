import gulp from 'gulp'

import { logSettings } from '../common/console.js'
import { clean } from '../common/clean.js'
import { generateTwig } from '../common/twig.js'
import { generatePug } from '../common/pug.js'
import { generateHtml } from '../common/html.js'
import { generateFonts } from '../common/fonts.js'
import { generateCss } from '../common/scss.js'
import { generateImages } from '../common/images.js'
import { generateJs } from '../common/js.js'
import { generateFavicons } from '../common/favicons.js'
import { generateIcons } from '../common/icons.js'
import { copyPublicFolder } from '../common/copy.js'

import { setEnvVariables } from './env.js'

const templateEngine = () => {
  switch (process.env.TEMPLATE_ENGINE) {
    case 'html':
      return generateHtml()
    case 'pug':
      return generatePug()
    default:
      return generateTwig()
  }
}

export const build = gulp.series(
  setEnvVariables,
  logSettings,
  clean,
  gulp.parallel(
    templateEngine,
    generateFonts,
    generateCss,
    generateImages,
    generateJs,
    generateIcons,
    generateFavicons,
    copyPublicFolder
  )
)
