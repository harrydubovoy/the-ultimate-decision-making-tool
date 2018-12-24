const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const devMode = process.env.NODE_ENV == 'development';

module.exports = {
    entry: './src/app.js',

    output: {
        filename: 'bundle.js',    
        path: path.resolve(__dirname, 'dist'),
        publicPath: __dirname
    },

    devtool: devMode ? 'inline-source-map' : false,

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
    }

};