const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './js/index.js',
        todo: './js/todo.js',
        project: './js/project.js',
        page: './js/page.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    watch: (process.argv.indexOf('--watch') > -1),
    module: {
        rules: [{
        }]
    },
    output: {
        filename: './js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};