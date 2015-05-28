'use strict';

/* deps: mocha */
var assert = require('assert');
var info = require('./');

describe('info', function () {
  it('should return a info symbol based on OS:', function () {
    if (process.platform === 'win32') {
      assert.equal(info, 'i');
    } else {
      assert.equal(info, 'ℹ');
    }
  });
});
