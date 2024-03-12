const webpack = require('webpack');

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      fallback: {
        "crypto": false
      }
    },
    plugins: [
      // Menambahkan DefinePlugin untuk mengatur variabel lingkungan
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
      })
    ]
  }
};
