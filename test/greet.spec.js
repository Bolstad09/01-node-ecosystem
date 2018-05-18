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






// const greet = require('../lib/greet.js');

// describe('greet module', () => {

//   it('should return null when passed non string' , () => {

//     const expected = null;

//     const actual = greet();
    
//     expect(actual).toBe(expected);
//   });

//   it('should return null when passed non string' , () => {

//     const expected = null;

//     const actual = greet(0);
    
//     expect(actual).toBe(expected);
//   });

//   it('should return hello, [string] when passed non string' , () => {

//     const expected = "hello, brittany";

//     const actual = greet('Brittany');
    
//     expect(actual).toBe(expected);
//   });