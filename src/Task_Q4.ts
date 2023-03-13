// 4- Task: Create a Function to Calculate the Factorial of a Number
// Breakdown:
//     • Create a function that takes a number as input and calculates its factorial using a loop.
//     • The factorial of a number is the product of all positive integers less than or equal to the number. For example, the factorial of 5 is 5 x 4 x 3 x 2 x 1 = 120.
//     • The function should return the factorial of the input number.
//     • Test the function with different numbers to make sure it is working correctly.

function calcFactorial(num:number): number {

    let factorial = num;
    for (let i = num-1; i > 0; i--){
        factorial = factorial * i;
    }

    return factorial;


}

console.log(calcFactorial(3));