// 2- Task: Create an Array Manipulation Program
// Breakdown:
//     • Declare an array of strings, e.g. ["apple", "banana", "cherry", "date", "elderberry"]
//     • Use array methods to perform the following manipulations:
//         ◦ Append a string to the end of the array
//         ◦ Prepend a string to the beginning of the array
//         ◦ Remove a string from a specific index in the array and replace it with another string
//     • Display the array before and after each manipulation to the user as output.

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(`Array before: ${fruits}\n`);

fruits.push("strawberry");
console.log(`Array after appending: ${fruits}\n`);

fruits.unshift("Watermelon")
console.log(`Array after prepending: ${fruits}\n`);

fruits.splice(2,1,"Lemon");
console.log(`Array after removing an element from a specified index and replacing it with another: ${fruits}`);