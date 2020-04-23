const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = options => {
  return {
    mode: 'production',
    entry: path.resolve(options.path, './src/index'),
    output: {
      path: path.resolve(options.path, './dist'),
      filename: `index.min.js`,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: options.externals,
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [path.resolve(options.path, './src')],
          options: {
            configFile: path.resolve(__dirname, 'babel.config.js')
          }
        },
        {
          test: /\.vue$/i,
          loader: 'vue-loader',
          exclude: /node_modules/,
          options: {
            optimizeSSR: false
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    optimization: {
      minimize: true
    }
  }
}
