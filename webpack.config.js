const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: path.join(__dirname, "src/app/index.ts"),
    output: {
        filename: "babylonBundle.js",
        path: path.join(__dirname, "dist", "js"),
    },
    resolve: {
        extensions: [".ts", ".js", ".jsx", ".tsx"],
        fallback: {
            fs: false,
            path: false, // require.resolve("path-browserify")
        },
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                loader: "source-map-loader",
                enforce: "pre",
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.(png|jpg|gif|env|glb|stl)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, "public/index.html"),
        }),
    ],

    devServer: {
        static: path.resolve(__dirname, "public"),
        compress: true,
        hot: true,
        open: true,
        // host: '0.0.0.0', // enable to access from other devices on the network
        // https: true // enable when HTTPS is needed (like in WebXR)
    },
};
