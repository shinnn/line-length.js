/*!
 * line-length | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/line-length.js
*/

module.exports = function lineLength(str) {
  'use strict';

  if (typeof str !== 'string') {
    var msg;

    if (arguments.length === 0) {
      msg = 'No arguments.';
    } else {
      msg = str + ' is not a string.';
    }

    throw new TypeError(msg + ' (Argument must be a string)');
  }

  var lines = str.split(/\r?\n/);
  var len = lines.length;
  var result = new Array(len);

  while (len--) {
    result[len] = lines[len].length;
  }

  return result;
};
