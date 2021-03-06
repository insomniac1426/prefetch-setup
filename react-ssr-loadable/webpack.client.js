const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./react-ssr-loadable/client/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[id].[chunkhash].js",
    publicPath: "/static/",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
            plugins: [
              "@loadable/babel-plugin",
              "@babel/plugin-transform-runtime",
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [new LoadablePlugin(), new CleanWebpackPlugin()],
  devtool: "source-map",
};
