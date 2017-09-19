const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

PATHS = {
    sources: path.join(__dirname, 'sources')
};

module.exports = {
    entry: {
        "index": path.join(PATHS.sources, 'pages', 'index', 'index.js')
    },
    output: {
        filename: './static/[name].js',
        path: path.resolve(__dirname, './')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './templates/index.html',
            template: path.join(PATHS.sources, 'pages', 'index', 'index.html')
        })
    ]
};