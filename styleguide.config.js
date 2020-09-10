const path = require('path')
const pkg = require('./package.json')

module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  components: 'src/components/**/[A-Z]*.js',
  moduleAliases: {
    [pkg.name]: path.resolve(__dirname, 'src'),
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.(s?)css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|svg|webp|gif)$/,
          use: [
            'file-loader',
          ],
        }
      ]
    }
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.(jsx?|tsx?)$/, '.examples.md')
  },
}
