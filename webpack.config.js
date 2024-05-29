const path = require("path");
const MiniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
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
        test: /\.scss$/,
        use: [MiniCss.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: ["src/**/*", "public/**/*"],
    hot: true,
    port: 3000,
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new MiniCss()],
};
