const path = require('path')
const pkg = require('./package.json')

module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  components: 'src/components/**/[A-Z]*.js',
  moduleAliases: {
    [pkg.name]: path.resolve(__dirname, 'src'),
  },
  theme: {
    color: {
      link: '#065fd4',
      linkHover: '#00adef',
    },
    font: ['Roboto'],
  },
  exampleMode: 'expand',
  usageMode: 'expand',
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.(jsx?|tsx?)$/, '.examples.md')
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')

    return `import { ${name} } from '${pkg.name}';`
  },
  sections: [
    {
      name: 'Inputs',
      components: 'src/components/inputs/**/[A-Z]*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }, {
      name: 'Navigation',
      components: 'src/components/navigation/**/[A-Z]*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        }, {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },
  styleguideComponents: {
    // SectionsRenderer: path.join(__dirname, 'styleguide/components/SectionsRenderer'),
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
  }
}
