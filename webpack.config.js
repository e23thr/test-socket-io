const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/lib.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, "src"),
        // use: "ts-loader",
        // exclude: /node-modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
  filename: "bundle.js",
    library: "chatSocket",
    path: path.resolve(__dirname, "build"),
  },
};
