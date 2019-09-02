// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

// The key insight here is to realize that we can build on what we’d learned from the previous problem. Except, we need to return a boolean value.
// This is as simple as returning a triple equality check against the original string.
// We could also use the new every method on an array to check that the first and last characters match up in sequential order towards the center. 
// However, this will check two times more than necessary.
// previous problem, the runtime complexities for both time and space are identical.



const isPalindrome = string =>
  string
    .split("")
    .every((character, index) => character === string[string.length - 1 - index]);   //Make test that you provide for each element inside a array

module.exports = isPalindrome;