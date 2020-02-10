const { HotModuleReplacementPlugin } = require("webpack");
const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

const config = {
  mode: isDevelopment ? "development" : "production",
  entry: {
    main: resolve(__dirname, "../src/index.tsx")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ["awesome-typescript-loader"],
        exclude: [/node_modules/]
      }
    ]
  },
  performance: {
    hints: false
  },
  devServer: {
    host: "localhost",
    port: 3001,
    contentBase: join(__dirname, "../public"),
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html"
    })
  ]
};

module.exports = config;
