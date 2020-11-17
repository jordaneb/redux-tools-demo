const path = require('path');

const appConfig = {
    target: 'web',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.(ts|tsx|js|jsx)/, use: 'ts-loader' },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    }
}

module.exports = [appConfig];
