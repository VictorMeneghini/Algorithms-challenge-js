const isPalindrome = require("../src/challenge2");

describe('Palindrome', () => {
  it('Should return true if is a palindrome', () => {
    expect(isPalindrome("eeeeaaaaaaaaaaeeee")).toEqual(true);
  });

  it('should return false if is a palindrome', () => {
    expect(isPalindrome("bbabbe")).toEqual(false);
  });
});