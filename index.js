'use strict'

var renderer = require('./lib/renderer')

hexo.extend.renderer.register('css', 'css', renderer(hexo))
hexo.extend.renderer.register('scss', 'css', renderer(hexo))
