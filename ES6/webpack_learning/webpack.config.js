const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CssMininizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
//* переменная для работы hot module replacement(hmr)

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (!isDev) {
    config.minimizer = [
      new CssMininizerWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

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
  optimization: optimization(),
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
      minify: {
        collapseWhitespace: !isDev,
      },
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
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtract.loader,
            options: {
              // hmr: isDev,
              // reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
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
