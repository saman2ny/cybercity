module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true },
        enforce: 'post',
        include: require('path').join(__dirname, 'src'),
        exclude: [
          /node_modules/,
          /dist/,
          /(ngfactory|ngstyle)\.js/
        ]
      }
    ]
  }
};
