// Given an integer, reverse the order of the digits.

// The clever trick here is to first convert the integer to a string using the built-in toString method.
// Then, we can simply reuse the logic from the String Reversal algorithm.
// After the digits are reversed, we can use the global parseInt function to convert the string back to an integer, and Math.sign to carry over the polarity.
// This approach reduces to just one line of code!

const reverseInteger = integer =>
    parseInt(
        integer
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(integer);

module.exports = reverseInteger;