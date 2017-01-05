var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js'],
        root: helpers.root('src')
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    helpers.root('node_modules', 'rxjs'),
                    helpers.root('node_modules', '@angular')
                ]
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'

            },
            {
                test: /\.css$/,
                exclude: helpers.root('src'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                include: helpers.root('src'),
                loader: 'raw'
            }
        ],
        postLoaders: [
            {
                test: /\.(js|ts)$/, loader: 'sourcemap-istanbul-instrumenter-loader',
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ],
                query: { 'force-sourcemap': true }
            }
        ]
    }
}
