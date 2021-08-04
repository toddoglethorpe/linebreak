const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "linebreaker.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
    library: {
      type: "commonjs2",
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  externals: {
    "unicode-trie": "commonjs2 unicode-trie",
    "base64-js": "commonjs2 base64-js",
  },
};
