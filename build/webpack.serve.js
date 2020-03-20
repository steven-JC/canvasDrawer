require('colors')
const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.BABEL_ENV = 'gui'

module.exports = {
    mode: 'development',
    entry: {
        serve: path.join(__dirname, '../demo/serve.ts'),
        dev: path.join(__dirname, '../demo/dev.ts')
    },
    output: {
        publicPath: '',
        path: path.join(__dirname, '../dist'),
        filename: '[name].js?[hash:8]'
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(json)$/,
                loader: 'json-loader'
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg|mp3|mp4)$/,
                loader: 'url-loader?limit=1000',
                options: {
                    limit: 10000,
                    name: 'assets/[name].[ext]?[hash:8]'
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: `demo/serve.html`,
            inject: 'body',
            chunks: ['serve'],
            showErrors: true,
            cache: false,
            filename: `serve.html`
        }),
        new HtmlWebpackPlugin({
            template: `demo/dev.html`,
            inject: 'body',
            chunks: ['dev'],
            showErrors: true,
            filename: `index.html`,
            cache: false
        })
    ],

    resolve: {
        alias: {
            '@': path.join(__dirname, '../src')
        },
        extensions: ['.js', '.ts', '.json']
    },

    devtool: '#cheap-module-eval-source-map',
    target: 'web',
    devServer: {
        contentBase: path.resolve(__dirname, '../'),
        port: 8111,
        host: 'localhost.to8to.com'
    }
}
