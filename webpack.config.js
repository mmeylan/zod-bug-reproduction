const path = require('path')

module.exports = (env, argv) => {
    return {
        entry: './src/index.ts',
        target: 'node',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            libraryTarget: 'commonjs2',
        },
        resolve: {
            extensions: ['.mjs', '.ts', '.js'],
        },
        module: {
            rules: [
                {
                    use: 'ts-loader',
                    test: /\.ts?$/,
                },
            ],
        },
        plugins: [],
    }
}
