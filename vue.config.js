/* eslint-disable quote-props */
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-auto-import/webpack')({
        eslintrc: {
          enabled: true
        },
        imports: ['vue', 'vue-router', {
          'vue-router': ['RouterLink'],
          'axios': [
            ['default', 'axios']
          ]
        }],
        dts: true
      })
    ]
  },
  // publicPath: '/mypage/',  // For github page
  runtimeCompiler: true
}
