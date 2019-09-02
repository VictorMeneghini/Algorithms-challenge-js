// Given a number as an input, print out every integer from 1 to that number.
// However, when the integer is divisible by 2, print out “Fizz”;
// when it’s divisible by 3, print out “Buzz”;
// when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// When we realize that the modulus operator can be used to check for divisibility, this classic algorithm challenge becomes trivial.
// The modulus divides two numbers and returns the remainder.
// Therefore, we can simply loop through every integer and check for remainders of 0.
// To show off our mathematical prowess, we can take into account that when a number is divisible by both a and b,
// it’s also divisible by their lowest common multiple.

const fizzBuzz = number => {
	let output = [];
	for (let i = 1; i <= number; i++) {
		if (i % 6 === 0) output.push("Fizz Buzz");
		else if (i % 2 === 0) output.push("Fizz");
		else if (i % 3 === 0) output.push("Buzz");
		else output.push(i);
	}
	return output;
};

module.exports = fizzBuzz;