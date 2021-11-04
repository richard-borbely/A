var assert = require('assert');

const alphanumeric = require('../src/index.js').alphanumeric;
const reverseString = require('../src/index.js').reverseString;
const flipCase = require('../src/index.js').flipCase;

describe('alphanumeric function - true', function() {
    it('Should return true if string is all alphanumeric', function() {
        assert.equal(alphanumeric('kkk'), true);
    });
}); 

describe('alphanumeric function - false', function() {
    it('Should return false if string is not all alphanumeric', function() {
        assert.equal(alphanumeric('kk$k'), false);
    });
}); 

describe('reverseString function', function() {
    it('Should reverse the string', function() {
        assert.equal(reverseString('abcd'), 'dcba');
    });
});

describe ('flipCase function', function() {
    it('should flip the casing in the input string', function() {
        assert.equal(flipCase("AbCD"), 'aBcd');
    });
});