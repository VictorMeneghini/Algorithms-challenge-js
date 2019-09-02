const reverseInteger = require('../src/challenge3');

describe('Reverse integer', () => {
  it('should return the reverse value of integer input', () => {
    expect(reverseInteger(123456)).toEqual(654321);
  });
});