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

  return str.split(/\r?\n/).map(function(line) {
    return line.length;
  });
};
