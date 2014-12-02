spider-loader
=============

Webpack loader for the [Spider](http://spiderlang.org) programming language.


###Usage:
Requires [traceur-loader](https://github.com/iamdustan/traceur-loader):
```
npm i --save traceur-loader spider-loader
```

*webpack.config.js*:
```js
loaders: [ { test: /\.spider$/,  loader: "traceur?runtime&asyncFunctions&arrayComprehension!spider" } ]
```

###Options:
Both **target** (`ES5` or `ES6` (default)) and **sourceMap** compile options are available:

```js
{test: ..., loader: "traceur!spider?target=...&sourceMap"}
```

More traceur options are [available in the source](https://github.com/google/traceur-compiler/blob/master/src/Options.js#L25).


###Contributions
All feedback, issues, and pull request's are *greatly* appreciated!