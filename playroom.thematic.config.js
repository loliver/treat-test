const path = require('path')
const { TreatPlugin } = require('treat/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  title: 'Ocean Blue',
  outputPath: './public/playroom/thematic',
  frameComponent: './playroom/thematic/frame-component.tsx',
  components: './playroom/thematic/components.ts',
  snippets: './playroom/thematic/snippets.ts',
  themes: './playroom/thematic/themes.ts',
  widths: [360, 480, 768, 960, 1164, 1366],
  typeScriptFiles: [
    './node_modules/@oceanblue/**/*.{ts,tsx}',
    './playroom/**/*.{ts,tsx}'
  ],
  exampleCode: `
  <Button>Test</Button>
  `,
  webpackConfig: () => ({
    plugins: [
      new TreatPlugin({
        outputLoaders: [MiniCssExtractPlugin.loader]
      }),
      new MiniCssExtractPlugin({
        ignoreOrder: true,
        filename: '[contenthash:8].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules\/(?!@oceanblue)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/react',
                ['@babel/preset-typescript', {
                  configFile: path.resolve('./tsconfig.json'),
                  isTSX: true,
                  allExtensions:true,
                  allowDeclareFields: true
                }],
                ['@babel/preset-env', {
                  targets: '> 0.25%, not dead'
                }]
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                'babel-plugin-treat'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules\/(?!(@oceanblue|@anz|normalize.css))/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico|otf|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          exclude: /node_modules\/(?!@(oceanblue|anz))/,
          type: 'asset'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    }
  })
}
