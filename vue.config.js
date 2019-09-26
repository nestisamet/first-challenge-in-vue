const webpack = require("webpack");

module.exports = {
  devServer: {
    port: 4010
    /*proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/rest': {
        target: 'https://mulakat.stemizer.com',
        changeOrigin: true,
        pathRewrite: {
          '^/rest': ''
        }
      },
      '/rest/account': {
        target: 'https://mulakat.stemizer.com',
        changeOrigin: true,
        pathRewrite: {
          '^/rest/account': ''
        }
      },
      'https://mulakat.stemizer.com/rest/account/signin': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/rest/account': ''
        }
      }
      
    }*/
  }
};