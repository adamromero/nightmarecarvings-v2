const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
   entry: path.resolve(__dirname, "src", "index.js"),
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.[hash].js",
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: "./src/index.html",
      }),
   ],
   resolve: {
      modules: [__dirname, "src", "node_modules"],
      extensions: [".jsx", ".js", ".json"],
   },
   devServer: {
      port: 8080,
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"),
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.png|svg|jpg|gif$/,
            use: ["file-loader"],
         },
         /*{
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: ["url-loader?limit=100000"],
         },*/
      ],
   },
};
