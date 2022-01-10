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

//* css loader конструкция
const cssLoader = (loader) => {
  const loaders = [
    {
      loader: MiniCssExtract.loader,
      options: {
        // hmr: isDev,
        // reloadAll: true,
      },
    },
    'css-loader',
  ];
  if (loader) {
    loaders.push(loader);
  }
  return loaders;
};

//* babel loader конструкция
const babelPreset = (preset) => {
  const presets = {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  };
  if (preset) {
    presets.options.presets.push(preset);
  }
  return presets;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './js/index.jsx'],
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
        use: cssLoader(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoader('sass-loader'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: babelPreset(),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: babelPreset('@babel/preset-typescript'),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: babelPreset('@babel/preset-react'),
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
