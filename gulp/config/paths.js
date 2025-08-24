
import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const sourceFolder = process.env.SOURCE_FOLDER || './src'
const distFolder = process.env.DIST_FOLDER || './dist'

const watchSrc = {
  twig: `${sourceFolder}/twig/**/*.twig`,
  pug: `${sourceFolder}/pug/**/*.pug`,
  html: `${sourceFolder}/html/**/*.html`,
}

const src = {
  twig: `${sourceFolder}/twig/pages/**/*.twig`,
  pug: `${sourceFolder}/pug/pages/**/*.pug`,
  html: `${sourceFolder}/html/pages/**/*.html`,
  js: `${sourceFolder}/assets/js/**/*.js`,
  scss: `${sourceFolder}/assets/scss/**/*.{scss, css}`,
  images: `${sourceFolder}/assets/images/**/*`,
  fonts: `${sourceFolder}/assets/fonts/**/*`,
  favicon: `${sourceFolder}/assets/favicons/favicon.png`,
  public: `${sourceFolder}/public/**/*`,
  icons: `${sourceFolder}/assets/icons/**/*`
}

const dist = {
  js: `${distFolder}/assets/js`,
  scss: `${distFolder}/assets/css`,
  images: `${distFolder}/assets/images`,
  webp: `${distFolder}/assets/images/webp`,
  fonts: `${distFolder}/assets/fonts`,
  favicon: `${distFolder}/assets/favicons`,
  public: `${distFolder}/public`
}

export const path = {
  watchSrc,
  src,
  dist,
  rootFolder,
  sourceFolder,
  distFolder
}
