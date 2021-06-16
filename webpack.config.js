// need to bring in webpack's methods for the jQuery plugin to work
const webpack = require("webpack");
// Node.js Module 
const path = require("path");



// create the main config object within our file. 
// **we will write options within this ibject that tell webpack what to do 
// For a basic configuration, we need to provide webpack with three properties: entry, output, and mode. The first thing we want to declare is the entry property. The entry point is the root of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code.
// webpack will next take the entry point we have provided, bundle that code, and output that bundled code to a folder that we specify. It is common and best practice to put your bundled code into a folder named dist, which is short for distribution. 
// The final piece of our basic setup will provide the mode in which we want webpack to run. By default, webpack wants to run in production mode. In this mode, webpack will minify our code for us automatically, along with some other nice additions. We want our code to run in development mode:

module.exports = {
    entry: "./assets/js/script.js",
    output: {
      path: path.join(__dirname + "/dist"),
      filename: "main.bundle.js"
    },
    plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    ],
    mode: "development"
  };


