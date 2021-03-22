const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./react-ssr-loadable/server/index.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@loadable/babel-plugin",
              "@babel/plugin-transform-runtime",
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
  target: "node",
  plugins: [new CleanWebpackPlugin()],
};
