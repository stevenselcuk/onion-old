const resolve = m => require.resolve(m)

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      resolve(`@babel/plugin-proposal-class-properties`),
      {
        loose: true,
      },
    ],
  ]
};
