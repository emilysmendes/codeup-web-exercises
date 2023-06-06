// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// Your output should look like this:
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49


"use strict"

let askForOddNumber;

while (true) {
    askForOddNumber = prompt("Enter an odd number between 1 and 50.");
    askForOddNumber = parseInt(askForOddNumber);
    if (askForOddNumber % 2 !== 0 && askForOddNumber >= 1 && askForOddNumber <= 50) {
        console.log(`Number to skip is ${askForOddNumber}`);
        break;
    }
}
for(let i = 1; i<= 50; i++) {
    if (i === askForOddNumber) {
        console.log(`Yikes! Skipping number: ${askForOddNumber}`);
        continue;
    }
    console.log(`Here is an odd number: ${i}`);
}

//              :CLASS EXAMPLE:
// function numberOneThroughFifty () {
//     return parseInt(prompt("Enter an odd number from 1 to 50"));
// }
// function promptUntilOdd() {
//     do {
//         const userNumber = numberOneThroughFifty();
//         if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0) {
//             console.log('Number to skip is: ' + userNumber);
//             for (let i = 1; i <= 50; i++) {
//                 if (i === userNumber) {
//                     console.log("Yikes! Skipping Number: " + userNumber); {
//                     continue;
//                 }
//             }
//             if (i % 2) {
//                 console.log("Here is an odd number: " + i);
//             }
//         }
//         break;
//
//     }
//         console.log("Invalid input");
// } while(true)
// }
//
// promptUntilOdd();

//                  :CLASS EXAMPLE 2:
let userNumber
do {
    userNumber = prompt("Please enter a number between 1 and 50");
    if(userNumber <= 0 || userNumber >= 51 || userNumber % 2 === 0) {
        alert("Number entered is invalid.")
    } else
        break;
} while (true);
for(let i = 1; i <=50; i += 2) {
    if(i === userNumber) {
        console.log("Yikes! Skipping Number: " + i);
        continue;
    } if(i % 2) {
        console.log("Here is an odd number: " + i);
    }
}