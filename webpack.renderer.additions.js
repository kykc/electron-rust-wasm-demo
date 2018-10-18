module.exports = {
    output: {
        globalObject: 'this'
    },
    resolve: {extensions: ['.wasm']},
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: { loader: 'worker-loader' }
            }
        ]
    }
};
