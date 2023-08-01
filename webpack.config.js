const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        port: 4000,
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|ts|jsx)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
        ],
    }
}