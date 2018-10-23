"use strict";
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = __dirname + "/wwwroot/dist";
module.exports = {
    entry: "./src/app.tsx",
    plugins: [
        new CleanWebpackPlugin([distPath])
    ],
    output: {
        filename: "bundle.js",
        path: distPath
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /node_modules/ },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};