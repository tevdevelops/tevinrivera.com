// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_mixins.scss'),
        path.resolve(__dirname, './src/assets/sass/_fonts.scss'),
        path.resolve(__dirname, './src/assets/sass/_variables.scss'),
        path.resolve(__dirname, './src/assets/sass/_globals.scss')
      ]
    })
}

module.exports = {
  siteName: 'TevDevelops | Tevin Rivera',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // Required
        baseDir: './blog', // Where .md files are located
        pathPrefix: '/blog', // Add route prefix. Optional
        template: './src/templates/Post.vue', // Optional
        remark: {
          autolinkHeadings: false // disable auto-adding links to headings
        }
      }
    }
  ],

  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })

    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
  }
}
