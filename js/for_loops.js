// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// For example, showMultiplicationTable(7) should output
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
\
//
for (let n = 1; n <= 10; n++) {
    let i = 7;
    let showMultiplicationTable = i * n;
    console.log(`${i} * ${n} = ${showMultiplicationTable}`)
}
//                 :CLASS EXAMPLE:
//  function showMultiplicationTable (number) {
//         for (let i = 1; i <11; i++) {
//             console.log(`${number} x ${i} = ${number * i}`);
//         }
// }
//  showMultiplicationTable(number);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...
//
for (let x = 1; x <= 10; x++) {
    let count = Math.floor(Math.random() * (200 - 20 + 1) + 20)
    if (count % 2 === 0) {
        console.log(count + " is even");
    } else {
        console.log(count + " is odd");
    }
}

//            :CLASS EXAMPLE:
//  function randomEvenOrOdd () {
//  for (let i = 0; i < 10; i++) {
//      const randomNumber = Math.floor(Math.random() * (200-20 + 1) + 20)
//      if (randomNumber % 2 === 0) {
//          console.log(randomNumber + " is even");
//      } else {
//          console.log(randomNumber + " is odd");
//  }
//
// randomEvenOrOdd ():


// Create a for loop that uses console.log to create the output shown below.
//  1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (let i = 1; i <= 9; ++i) {
    let result = [];
    for (a = 1; a <= i; ++a) {
        result.push(i);
    }
    console.log(result.join(""));
}

//          :CLASS EXAMPLE:
// function numPyramid() {
//     for(let i =1; i <10; i++) {
//         console.log(`${i.toString().repeat(i)}`);
//     }
// }
//
// numPyramid();

//          :CLASS EXAMPLE 2:
// function numPyramidButDifficult () {
//     for(let i= 1; i <= 9; i++) {
//         let oneLevelOfMyPyramid = '';
//         for(let j = 1; j <=i; j++) {
//             oneLevelOfMyPyramid = oneLevelOfMyPyramid + i;
//         }
//         console.log(oneLevelOfMyPyramid);
//     }
// }
//
// numPyramidButDifficult();


// Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (let w = 100; w >= 5, w -= 5;) {
    console.log(w);
}

//          :CLASS EXAMPLE:
// function oneHundredToFive () {
//     for(let i = 20; i > 0; i--) {
//         console.log(i*5);
//     }
// }
//
// oneHundredToFive();
