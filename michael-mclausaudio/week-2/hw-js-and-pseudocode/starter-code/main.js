/*
	Part 1: Create three variables: name, age, address.
	Create a fourth variable, greeting, that combines these 3 variables
	to form a greeting.
	For example, "Hello, I'm Anthony, I'm 20 years old and live in 100 Main St."
	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/

	let name = "Michael",
			age = 28,
			address = "321 9th Ave",
			greeting = "Hello, my name is " + name + ".  I am " + age + " years old and live at " + address + ".";

			console.log(greeting)

/*
	Part 2: Create another variable called greeting2. This time, use the
	new ES6 Syntax, string interpolation, to create the same greeting.

	Hint: String interpolation uses backticks (`) instead of quotation marks.

	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/

	let greeting2 = `Hello, my name is ${name}.  I am ${age} years old and live at ${address}.`;

	console.log(greeting2)

/*
	Part 3: Pythagorean theorem. We will be using the Math object we saw earlier
	in the lesson for this problem.

	Create 2 variables, side1 and side2, which represent two sides of a triangle.
	Assign these variables any positive integer values.
	Create a third variable, side3, which represents the hypotenuse of the triangle.

	Use the Pythogorean theorem to solve for the value of side3.
	(https://en.wikipedia.org/wiki/Pythagorean_theorem)

	Hint: Take a look at the MDN reference for more information about the Math object.
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

	Hint: We need to be able to calculate the square root of a number to find the
	value of the hypotenuse. Does the Math object give us a function to find the square root?

	Hint: We need to be able to calculate the square of a number to find the value
	of the hypotenuse. Does the Math object give us a function find the square of a number?

	Log the side1, side2 and side3 variables to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.
*/

	let side1 = 3,
			side2 = 4;

	let side3 = Math.sqrt((Math.pow(side1, 2) + Math.pow(side2, 2)));

	console.log('Side1: ' + side1);
	console.log(`Side2: ${side2}`);
	console.log(`Side3: ${side3}`);

/*
	Part 4: (No coding is needed for this part).
	We are given a list of 20 numbers. We have to go through the list and find the
	largest number.

	What would the pseudocode for this problem look like? What variables would we need?

	Hint: How would we solve this problem if we had to do this with pencil and paper?
	What number would we write down to remember? Anything that you write down probably
	belongs in a variable.

	Bonus: What would the pseudocode look like if you also had to find the smallest number?
*/
// COMMENTED OUT MY ANSWER SO THAT IT DOESN'T EFFECT CODE BELOW
//
//
// Find Largest Number
// Assign 'highest number' var to the value of the first number.
// Check the next number
// if the value of this number is larger than the 'highest number', assign highest number to this value.
// if it isn't, move on to the next number in the sequence and repeat line 83.
// Once we have compared the value of the last number in the sequence to the 'highest number', return the value of highest number.
//
//
/* Bonus
Take a look at the numbers array below. Use the pseudo code you wrote above to find the largest number and log it to the console in the following format: `"The highest number is #"`.

If you need a hint on how to solve this one, take a look at the steps listed below, along with the linked resources.

Steps:
- First create a variable highestNumber and give it a value of the number 0.
- Then use a for loop(https://www.w3schools.com/js/js_loop_for.asp) to loop through the numbers array.
	Your for loop should look something like this:
	for (var i = 0; i < numbers.length; i++) {

	}
- Within the loop, use an if statement(https://www.w3schools.com/js/js_if_else.asp) to see if the current number (numbers[i]) is greater than the number that is currently stored in highestNumber.
- If so, save numbers[i] in the highestNumber variable.
	- Hint: you only need to use the var keyword when you initially set up a variable. To update a variable, simply use the variable name (highestNumber) followed by = followed by the new value (numbers[i]).
- After the for loop, log highestNumber to the console.
*/
//Instead of a 'for' loop, I'll use a while loop since I don't use them often and need to get better.

var numbers = [20, 3, 5, 7, 13, 30];

let i = 0,
		largest = 0;

while (i < numbers.length) {
	if (numbers[i] > largest) {
		largest = numbers[i];
		i++;
	}
	// Whoops, forgot to increment our i var outside of the if statement and ran into an infinite loop!
	i++;
}
console.log(`The largest number of the array is ${largest}..`);
