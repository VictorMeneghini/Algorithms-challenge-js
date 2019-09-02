const reverse = require('../src/challenge1');

describe('String reversal', () => {
  it('should rever String', () => {
    expect(reverse("Hello World!")).toBe('!dlroW olleH')
  });
});