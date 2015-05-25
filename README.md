# line-length.js

[![NPM version](https://img.shields.io/npm/v/line-length.svg)](https://www.npmjs.com/package/line-length)
[![Bower version](https://img.shields.io/bower/v/line-length.svg)](https://github.com/shinnn/line-length.js/releases)
[![Build Status](https://travis-ci.org/shinnn/line-length.js.svg?branch=master)](https://travis-ci.org/shinnn/line-length.js)
[![Build status](https://ci.appveyor.com/api/projects/status/o06alyk0a5w16wc7?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/line-length-js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/line-length.js.svg)](https://coveralls.io/r/shinnn/line-length.js)
[![devDependency Status](https://img.shields.io/david/dev/shinnn/line-length.js.svg)](https://david-dm.org/shinnn/line-length.js#info=devDependencies)

Get line length of a string

```javascript
lineLength('aaaaaaaa\naaaaaaaaaaaaaaaaaaaa\r\naaaaaa\n'); //=> [8, 20, 6, 0]
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install line-length
```

#### [Bower](http://bower.io/)

```
bower install line-length
```

#### [Duo](http://duojs.org/)

```javascript
const lineLength = require('shinnn/line-length.js');
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/line-length.js/master/line-length.js)

## API

### lineLength(*string*)

*string*: `String`  
Return: `Array` of `Number`

It returns an array of line length. "Line" means each part of a string splitted by `\n` and `\r\n`.

```javascript
lineLength('foo'); //=> [3]
lineLength('\n'); //=> [0, 0]
lineLength(''); //=> [0]
```

## License

Copyright (c) 2014 - 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
