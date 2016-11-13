const path = require("path");
const webpack = require("webpack");
const jsPath = path.resolve(__dirname, "Js");

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({compress: {"warnings": false, "screw_ie8": true}});
const definePlugin = new webpack.DefinePlugin({"process.env": {"NODE_ENV": JSON.stringify("production")}});

const plugins = [];

const isProduction = (process.env.NODE_ENV === "production");
if (isProduction) {
    plugins.push(uglifyPlugin);
    plugins.push(definePlugin);
}

module.exports = {
    context: jsPath,
    entry: {
           "index": "./index.jsx",
    },
    output: {
        path: path.join(__dirname, "Build"),
        filename: "[name].bundle.js"
    },
    plugins: plugins,
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ["eslint"],
                include: jsPath
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                include: jsPath,
                query: {
                    plugins: ["transform-runtime"],
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        root: path.resolve(__dirname, "Js")
    }
};
