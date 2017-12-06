# Using @std/esm with @babel/register

## Problems with nyc

The following works:

``` shellsession
$ npm test

> esm-babel-nyc-test@1.0.0 test /Users/randall/Desktop/esm-babel-nyc-test
> ./test

first
last
```

The following does _not_ work:

``` shellsession
$ npm test -- --nyc

> esm-babel-nyc-test@1.0.0 test /Users/randall/Desktop/esm-babel-nyc-test
> ./test "--nyc"

file:///Users/randall/Desktop/esm-babel-nyc-test/index.mjs:3
import _asyncIterator from "@babel/runtime/helpers/builtin/es6/asyncIterator";
^^^^^^

SyntaxError: Unexpected token import
    ...
```

## Secondary issue

The .babelrc.js file needs ```{ "cjs": { "vars": true } }``` or
@std/esm chokes on its use of `module.exports`. I expected not to need
this given that the file does not contain `import` or `export`
statements.
