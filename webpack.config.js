/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    aside: "./js/aside.js",
    header: "./js/header.js",
    main: "./js/main.js",
    todo: "./js/todo.js",
    todo_manager: "./js/todo_manager.js",
    todo_modal: "./js/todo_modal.js",
    todo_ui: "./js/todo_ui.js",
    project: "./js/project.js",
    project_manager: "./js/project_manager.js",
    project_modal: "./js/project_modal.js",
    project_ui: "./js/project_ui.js",
    index: "./js/index.js",
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
