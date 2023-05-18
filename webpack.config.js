const path = require('path')
const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const clientConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/client/index.tsx',
    devServer: {
        stats: 'errors-only'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    context: path.resolve(__dirname, './src/client'),
                    configFile: 'tsconfig.json'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/js')
    },
    plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })]
}

const serverConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/server/server.ts',
    devServer: {
        stats: 'errors-only'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    context: path.resolve(__dirname, './src/server'),
                    configFile: 'tsconfig.json'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    node: {
        __dirname: false
    },
    devServer: {
        stats: 'errors-only'
    },
    externals: [nodeExternals()]
}

module.exports = [serverConfig, clientConfig]