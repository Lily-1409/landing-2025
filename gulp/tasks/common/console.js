export const logSettings = (callback) => {
  let config = [
    {
      title: 'Template engine',
      value: process.env.TEMPLATE_ENGINE || 'twig'
    },
    {
      title: 'Source folder',
      value: process.env.SORCE_FOLDER || './src'
    },
    {
      title: 'Dist folder',
      value: process.env.DIST_FOLDER || './dist'
    }
  ]

  console.log('')
  console.log('SETTINGS:')
  console.table(config)
  console.log('')

  callback()
}
