const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.js$|\/stories\/.*\.js$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          prettierConfig: {
            parser: 'babel'
          }
        }
      }
    ],
    enforce: 'pre'
  })

  // eslint-disable-next-line no-param-reassign
  config.resolve.alias.hestia = path.resolve(__dirname, '../src')

  return config
}
