'use strict'

var postcss = require('postcss')
var postcssrc = require('postcss-load-config')
var sassRenderer = require("hexo-renderer-sass/lib/renderer")

module.exports = (hexo) => (data) => {
  if(data.path.endsWith("scss")){
    data.text = sassRenderer("scss", hexo)(data);
  }
  
  return postcssrc().then(({
      plugins,
      options
    }) => postcss(plugins).process(data.text, options))
    .then((result) => {
      return result.css
    }).catch(e => {
      console.log("Error")
    })
}
