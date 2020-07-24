module.exports = [{
      plugin: require('../../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1140,"quality":85,"showCaptions":true,"linkImagesToOriginal":false,"disableBgImageOnAlpha":true}},{"resolve":"gatsby-remark-embed-video","options":{"width":800}},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-smartypants"}],"remarkPlugins":[null]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Muli:n4,n7,n9","Fira Sans:n4,i4,n6,n7&display=swap"]}},
    },{
      plugin: require('../../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/dharmon/Downloads/themeforest-t8Cqheo1-flexiblog-react-gatsby-blog-template-old/@gatsby-theme-flexiblog/packages/shared/src/layout/Layout/Layout.jsx"},
    }]
