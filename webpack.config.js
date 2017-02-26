'use strict';

module.exports = {
    entry: './src/index.tsx',
    output: { filename: 'public/index.js' },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
