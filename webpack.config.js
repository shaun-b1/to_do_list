/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    index: "./js/index.js",
    page: "./js/page.js",
    todo: "./js/todo.js",
    todo_modal: "./js/todo_modal.js",
    project: "./js/project.js",
    project_modal: "./js/project_modal.js",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  watch: process.argv.indexOf("--watch") > -1,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "./js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
