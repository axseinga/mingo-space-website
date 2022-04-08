const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const DEV_MODE = process.env.NODE_ENV === "development";
const SRC_DIR = path.resolve(__dirname, "src");
const PUBLIC_DIR = path.resolve(__dirname, "public");
const BUILD_DIR = path.resolve(__dirname, "build");

module.exports = {
    mode: DEV_MODE ? "development" : "production",
    target: DEV_MODE ? "web" : "browserslist",
    stats: "minimal",
    devtool: DEV_MODE ? "eval-cheap-module-source-map" : "source-map",
    devServer: {
        port: 8081,
        historyApiFallback: true,
        hot: true,
    },
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash:8].js",
        chunkFilename: "[name].[contenthash:8].chunk.js",
        path: BUILD_DIR,
        clean: true,
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                        plugins: [
                            "@babel/plugin-transform-runtime",
                            "babel-plugin-macros",
                            [
                                "babel-plugin-styled-components",
                                {
                                    ssr: !DEV_MODE,
                                    fileName: false,
                                    displayName: DEV_MODE,
                                    minify: !DEV_MODE,
                                    pure: !DEV_MODE,
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: DEV_MODE,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(PUBLIC_DIR, "index.html"),
            filename: "index.html",
            inject: "body",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: PUBLIC_DIR,
                    to: BUILD_DIR,
                    globOptions: {
                        ignore: [path.join(PUBLIC_DIR, "index.html")],
                    },
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
        }),
    ],
};
