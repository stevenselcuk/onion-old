const resolve = m => require.resolve(m)
const IS_TEST = (process.env.BABEL_ENV || process.env.NODE_ENV) === `test`
const IS_PROD = (process.env.BABEL_ENV || process.env.NODE_ENV) === `production`

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      resolve(`@babel/plugin-proposal-class-properties`),
      {
        loose: true,
      },
    ],
    resolve(`@babel/plugin-transform-runtime`),
    [
      resolve(`@babel/plugin-transform-spread`),
      {
        loose: false,
      },
    ],
  ]
};
