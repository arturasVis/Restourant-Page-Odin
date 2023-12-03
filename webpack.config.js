const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
    static: './dist',
    },
    entry: {
    app: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Production',
    }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};