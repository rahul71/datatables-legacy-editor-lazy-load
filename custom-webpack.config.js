const webpack = require('webpack');
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // used for bundle analysis

module.exports = (config, options) => {
    config.optimization= {
        concatenateModules: false,
        minimizer: [
            new ESBuildMinifyPlugin({
                target: 'es2015',  // Syntax to compile to found here:  https://github.com/privatenumber/esbuild-loader
            })
        ]
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    );
    /**
     * For analysis of dev and prod builds
     */
    config.plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: "../webpack-analysis-report.html"
        })
    );
    config.plugins.push(
        // Ignore all locale files of moment.js
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/
        })
    );
    return config;
}
