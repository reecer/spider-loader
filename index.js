
var spider = require("spider-script");
var loaderUtils = require('loader-utils');

module.exports = function(source, map) {
    var opts = loaderUtils.parseQuery(this.query);
    var compiled = spider.compile({
      text: source,
      generateSourceMap: opts.sourceMap || true,
      target: opts.target || 'ES6'
    });

    if (compiled.errors.length > 0)
      this.callback(compiled.errors);
    else
      this.callback(null, compiled.result, compiled.sourceMap);
};