module.exports = {
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8888,
    https: false,
    hot: true,
    hotOnly: false,
    proxy: {
      [process.env.VUE_APP_API]: {
        target: process.env.VUE_API_DEV_TARGET,
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_API}`]: ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: "@import './src/styles/scssconfig.scss';"
      }
    }
  }
}
