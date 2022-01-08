const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
//* переменная для работы hot module replacement(hmr)

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './js/index.js',
  },
  output: {
    filename: './js/[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    port: 4200,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtract({
      filename: './css/[contenthash].bundle.css',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtract.loader,
            options: {
              // hmr: isDev,
              // reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
      // {
      //   test: /\.(png|jpg|svg|gif)$/,
      //   use: ['file-loader'],
      // },
      // {
      //   test: /\.(ttf|woof|woof2|eot)$/,
      //   use: ['file-loader'],
      // },
    ],
  },
};
