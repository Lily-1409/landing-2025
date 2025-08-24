import { resolve } from 'path'

import { path } from './gulp/config/index.js'

export default {
  mode: 'production',
  entry: {
    index: './src/assets/js/index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [resolve(path.rootFolder, path.src.js)],
        loader: 'babel-loader'
      }
    ]
  }
}
