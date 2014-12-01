
var spider = require("spider-script");
var loaderUtils = require('loader-utils');

module.exports = function(source, map) {
    var opts = loaderUtils.parseQuery(this.query);
    var compiled = spider.compile({
      text: source,
      generateSourceMap: opts.sourceMap,
      target: opts.target
    });

    if (compiled.errors.length > 0){
      var formtt = spider.formatErrors(this.resourcePath, source, compiled.errors);
      this.callback({message: formtt});
    }
    else
      this.callback(null, compiled.result, compiled.sourceMap);
};