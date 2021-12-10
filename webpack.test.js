const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
var nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "development",
    target: "node",
    //devtool: "none",
    externals: [nodeExternals({allowlist: [(/^node-fetch/),(/^@babylonjs/)]})],
    stats: "minimal",
    module: {
        rules: [
            {
                test: /\.([tj]sx?)$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },

            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff",
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff",
            },
            { test: /\.svg$/, use: ["@svgr/webpack"] },
            { test: /\.jpg$/, use: "url-loader?limit=100000" },
            { test: /\.png$/, use: "url-loader?limit=100000" },
            { test: /\.gif$/, use: "url-loader?limit=100000" },
            { test: /\.jpg$/, use: "file-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },

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
    plugins: [],
    resolve: {
        alias: {
            // "office-ui-fabric-react/lib/(.*)$": "office-ui-fabric-react/lib-commonjs/$1",
            // "@uifabric/styling/lib/(.*)$": "@uifabric/styling/lib-commonjs/$1",
            // "@uifabric/utilities/lib/(.*)$": "@uifabric/utilities/lib-commonjs/$1"
            //"office-ui-fabric-react/lib": "office-ui-fabric-react/lib-commonjs",
            //"@uifabric/styling/lib": "@uifabric/styling/lib-commonjs",
            //"@uifabric/utilities/lib": "@uifabric/utilities/lib-commonjs"
            //   "react":"preact/compat",
            //   "react-dom":"preact/compat"
        },
        extensions: [".jsx", ".js", ".json", ".mjs", ".ts", ".tsx", ".wasm"],
        plugins: [new TsconfigPathsPlugin()],
    },

    optimization: {
        //occurrenceOrder: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
};


                        // {
            //     test: /\.m?js/,
            //     resolve: {
            //         fullySpecified: false,
            //     },
            // },

            // {
            //     test: /\.js$/,
            //     include: /(node_modules|bower_components)/,
            //     use: {
            //         loader: "@sucrase/webpack-loader",
            //         options: {
            //             //jsx, typescript, flow, imports, react-hot-loader, jest
            //             transforms: ["imports"],
            //         },
            //     },
            // },
            // {
            //   test: /\.(m?js|[tj]sx?)$/,
            //   exclude: /(node_modules|bower_components)/,
            //   use: {
            //     loader: 'babel-loader',
            //     options: {
            //       presets:[
            //         ["@babel/preset-env", {
            //           "targets": { "esmodules": true }, // Use the targets that you was already using
            //           "bugfixes": true
            //         }]
            //       ],
            //       plugins: [
            //         ["@babel/plugin-transform-typescript", {allowDeclareFields: true, allowNamespaces: true, jsxPragma: "React"}],
            //         ["@babel/plugin-proposal-decorators", {legacy: true}],
            //         ["@babel/plugin-proposal-class-properties", {loose: true}],
            //         ["@babel/plugin-transform-react-jsx", {pragma: "React"}]
            //         ["@babel/plugin-proposal-optional-chaining"],
            //         ["@babel/plugin-proposal-nullish-coalescing-operator"],
            //         []
            //         ["babel-plugin-macros"],
            //         ["babel-plugin-inline-react-svg"]
            //       ]
            //     }
            //   }
            // },
            // {
            //   test: /\.(m?js|[tj]sx?)$/,
            //   exclude: /(node_modules|bower_components)/,
            //   use: [{loader: 'ts-loader', options: {transpileOnly: true}}]
            // },