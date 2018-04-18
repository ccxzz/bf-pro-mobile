const path = require('path')
function resolvePath (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {babelPolyfill:"babel-polyfill"},
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel-loader'],
                include: [resolvePath('src')]
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'image/[hash:8].[name].[ext]'
                },
                include: [resolvePath('src')]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    name: '[name]',
                    prefixize: true,
                },
                include: [resolvePath('src')]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: []
}

