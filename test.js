'use strict';

var requireBowerFiles = require('require-bower-files');
var test = require('tape');

function runTest(description, main) {
  test(description, function(t) {
    t.plan(3);

    t.deepEqual(
      main('a\r\nbc\n'),
      [1, 2, 0],
      'should get line length of a string.'
    );

    t.throws(
      main.bind(null, ['foo']), /TypeError.*not a string/,
      'should throw a type error when it takes a non-string argument.'
    );

    t.throws(
      main.bind(null), /TypeError.*No arguments/,
      'should throw a type error when it takes no arguments.'
    );
  });
}

runTest('require(\'line-length\')', require('./'));

global.window = {};
requireBowerFiles({self: true});

runTest('window.lineLength', window.lineLength);
