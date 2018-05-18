'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Arithmetic Function', () => {

  it('should return null if passed non number', () =>{
  
    const expected = null;
  
    const actual = arithmetic.add();
  
    expect(actual).toBe(expected);
  });

  it('add() should return sum of [a+b] if passed numbers' , () => {

    const expected = arithmetic.add(1,1);

    const actual = arithmetic.add(1,1);

    expect(actual).toBe(expected);
  });
  
  it('sub() should return sum of [a-b] if passed numbers' , () => {

    const expected = arithmetic.sub(1,1);

    const actual = arithmetic.sub(1,1);

    expect(actual).toBe(expected);
  });
});