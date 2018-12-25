const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const devMode = process.env.NODE_ENV == 'development';

console.log(path.join(__dirname, 'dist'));


module.exports = {
    entry: './src/app.js',

    output: {
        filename: 'bundle.js',    
        path: path.resolve(__dirname, 'dist/javascript'),
        publicPath: path.join(__dirname),
    },

    devtool: devMode ? 'inline-source-map' : false,

    // devServer: {
    //     contentBase: __dirname,
    //     hot: devMode,
    //     compress: devMode,
    //     historyApiFallback: devMode,
    //     open: devMode,
    //     overlay: {
    //         warnings: devMode,
    //         errors: devMode
    //     }
    // },

    optimization: {
        minimizer: [ new UglifyJsPlugin() ]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    },

    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ]    
};