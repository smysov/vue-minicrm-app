const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { VueLoaderPlugin } = require('vue-loader');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => {
  return isDev ? `[name].${ext}` : `[name].[contenthash:8].${ext}`;
};

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ];

  if (isProd) {
    base.push(new BundleAnalyzerPlugin());
  }

  return base;
};

module.exports = {
  target: 'web',
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: [
      '@babel/polyfill', './index.js',
    ],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  resolve: {
    extensions: [
      '.js', '.scss', '.vue',
    ],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      vue$: 'vue/dist/vue.js',
    },
  },
  optimization: optimization(),
  devServer: {
    port: 8080,
    noInfo: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    contentBase: path.join(__dirname, 'src'),
  },
  devtool: isDev ? 'source-map' : false,
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   loader: {
        //     scss: 'vue-style-loader!css-loader!sass-loader',
        //   },
        // },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.png|jpg|gif|jpeg|svg/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[contenthash:8][ext]',
        },
      },
      {
        test: /\.(ttf|woff|otf|eot|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[contenthash:8][ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
    ],
  },
};
