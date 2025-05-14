const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    blog: "./src/Pages/Blog/blog.js",
    about: "/src/Pages/About/about.js",
    contact: "/src/Pages/Contact/contact.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
    filename: "blog.bundle.js",
    filename: "about.bundle.js",
    filename: "contact.bundle.js",
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/Pages/About/about.html",
      filename: "about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/Pages/Blog/blog.html",
      filename: "blog.html",
      chunks: ["blog"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/Pages/Contact/contact.html",
      filename: "contact.html",
      chunks: ["contact"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 3000,
    // open: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
