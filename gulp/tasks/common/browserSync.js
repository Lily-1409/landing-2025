import bsync from 'browser-sync'

import { path } from '../../config/index.js'

export const browsersync = bsync.create()

export const startBrowserSync = (callback) => {
  browsersync.init({
    server: {
      baseDir: path.distFolder
    },
    port: process.env.LOCAL_DEV_SERVER_PORT || 3000
  })

  callback()
}

export const reloadBrowserSync = (callback) => {
  browsersync.reload()

  callback()
}
