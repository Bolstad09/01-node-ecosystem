'use strict';

const greet = require ('../lib/greet.js');

describe('greet module', () => {

  it('should return null when passed non string', () => {
    expect(greet()).toBeNull();
  });

  it('should return "hello ryo" when passed ryo', () => {
    expect(greet('ryo')).toBe('hello ryo');
  });

});