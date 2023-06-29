// // // Question 3
// // //Student enrollment exercise
// // let fullClass = false;
// // let dateConflict = false;
// // let canEnroll = fullClass === false && dateConflict === false;
// // OR
// // let canEnroll = !fullClass && !dateConflict;
// //
// // console.log(canEnroll);
// //
// // // Question 2
// // // hourly rate from each company
// // let google = 400 ;
// // let amazon = 380 ;
// // let facebook = 350 ;
// // // hours from each company
// // let hoursForGoogle = 6 ;
// // let hoursForAmazon = 4 ;
// // let hoursForFacebook = 10 ;
// // // payment from each company
// // let googlePayment = google * hoursForGoogle ;
// // let amazonPayment = amazon * hoursForAmazon ;
// // let facebookPayment = facebook * hoursForFacebook ;
// // // total weekly payment
// // let totalPayment = googlePayment + amazonPayment + facebookPayment;
// // // print result
// // console.log("Total payment for the week : $" + totalPayment);
// //
// // // Question 4
// // //
// // let atLeastTwo = true;
// // let offerNotExpired = true;
// // let premMem = true
// // let prodOff = (atLeastTwo && offerNotExpired) || premMem;
// //
// // let prodOff = offerNotExpired && (atLeastTwo || premMem) ;
// //
// // true || true === true
//
// // function identity(input) {
// //     return input
// // }
// // identity();
//
// var random = Math.floor((Math.random() * 3) + 1);
//
// function getRandomNumber(min, max) {
//     return  random, random
// }
//  getRandomNumber();
//
// // ================================= CONDITIONALS BONUSES
//
// // Bonus 1
// // Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// // - Catch any invalid inputs.
// // - Write the logic using if/else ifs and then refactor using a switch case
// //
//
// let favoriteDay = prompt("What is your favorite day of the week?")
// function favoriteDay (week) {
//     if ("monday") {
//     alert (favoriteDay + " is a long day};
// } else if ("tuesday") {
//         alert (favoriteDay + " is a cool day};
//     } else if ("wednesday") {
//         alert (favoriteDay + " is a middle day};
//     } else if ("thursday") {
//         alert (favoriteDay + " is a decent day};
//     } else if ("friday") {
//         alert (favoriteDay + " is a fun day};
//     } else if ("saturday") {
//         alert (favoriteDay + " is a better day};
//     } else if ("sunday") {
//         alert (favoriteDay + " is a calm day};
//     } else {
//     alert ("invalid input")}
// }
//
// console.log(favoriteDay(week));
//
//
// //     Bonus 2
// // Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// // - use an if/else
// //     - refactor to use a ternary operator
// //
// // Bonus 3
// // Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// // - account for any invalid user input
// // - case of input should not matter
// // - accept both abbreviations and full names of the months
// //
// //
// // GOLD STAR BONUS
// //
// // Create a distance unit conversion application.
// //     Prompt the user for unit of measurement.
// //     Prompt the user for a value.
// //
// //     Prompt the user for a second unit of measurement to convert to.
// //
// //     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// // then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// //
// // Use these conversion functions to make the correct unit conversion
// //
// // Potentially, you will need a large switch case to account for the possible unit conversions,
// //     i.e. what conversion functions will need to be called in and in what order.
// //
// //     DOUBLE GOLD STAR BONUS
// //
// //     Allow unit conversion to metric system units

// TODO - write a while loop that prints your name 10 times

/*
    TODO CHALLENGE - write a function, getNum1To10 that returns a number between 1 and 10 from the user.
      Keep prompting them until a valid number is given
 */
// let input = 1
//
// while (input <= 10)  {
//     console.log("Emily");
//     input++;
// };

/*
        TODO - write a do-while loop that will alert the current date and time and
          continue checking with the user if they want to see the latest time.

          Current date can be created with new Date().toLocaleString()
     */
//
// let willContinue = true;
// do {
//    willContinue= confirm ("It is currently: " + Date().toLocaleString() + ". Would you like to see the latest time?")
//     }
// while (willContinue);

/*
    TODO - write a for loop that prints all even numbers from 2 to 100


    TODO - write a for loop that prints all integers from 20 down to 1
 */

'use strict'

// for (let x = 2; x <= 100, x += 2;) {
//     console.log(x)
// }
//
// for (let y = 20; y >= 1; --y); {
//     console.log(y)
// }
//
// const me= {};
// me.hair= 'brown'
// me.eye = 'brown'
//
// console.log(me.hair)
// console.log(me)
// console.log(me["eye"])

// Make a function named isVowel(letter)
// function isVowel(letter) {
//     if (letter === ['a', 'e', 'i', 'o', 'u']) {
//         return letter + " is a vowel!";
//     } else {
//         return letter + " is not a vowel!";
//     }
// }
//
// console.log(isVowel('a'));
// console.log(isVowel('e'));
// console.log(isVowel('7'));
// console.log(isVowel('I'));

// Write a function, sumIsEqual, that takes in three inputs. The function should return
// true if the sum of the first two inputs are equal to the third input. If any of the
// inputs are not numbers, return false.
//
// function sumIsEqual (input1, input2, input3) {
//     if (input1 + input2 !== input3) {
//         return false;
//     } else if (typeof input1 === 'number' & typeof input2 === 'number' && typeof input3 === 'number'){
//         return false;
//     } else {
//         return true;
//     }
// }
//
// console.log(sumIsEqual('1',2,3));

// Write a function, returnUserObject, that takes in three String arguments: a username, password, and email. The function should return a user object with username, password and email properties.
//
// returnUserObject('jreich', 'password123', 'jreich@email.com') // returns...
//
// {
//     username: 'jreich',
//         password: 'password123',
//     email: 'jreich@email.com'
// }
//
// Assume all inputs are non-empty strings. The order of the properties on the object output do not matter but the order of the INPUTS do matter.

// function returnUserObject (userName, userPassword, userEmail) {
//     const user = {};
//     user.username = userName;
//     user.userpassword = userPassword;
//     user.email = userEmail;
//     return user;
// }
//
// console.log(returnUserObject());

// Create a function, returnProduct, that takes in an array of numbers and returns the product of all the numbers.
//     Assume all element in the input array are valid numbers. Assume all array inputs have at least 1 number.
// returnProduct([1, 2, 3]) // returns 1 * 2 * 3 = 6
// returnProduct([3, 3, 3]) // returns 3 * 3 * 3 = 27
// returnProduct([4, 1, 2]) // returns 4 * 1 * 2 = 8
// returnProduct([4, 0, 2]) // returns 4 * 0 * 2 = 0
// returnProduct([5, 3, 2]) // returns 5 * 3 * 2 = 30
// function returnProduct (nums) {
//
// }
//
// let product = 1;
// for (let i = 0; i < nums.length; i+= 1) {
//     product*= 1;
//
// }
//
//
// returnProduct();


// Create a function, returnTotalSales, that takes in an array of sales data objects and returns the sum of all
// totalItemsSold properties. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property.
//
// Create a function, returnTotalSales, that takes in an array of sales data objects and returns the sum of all
// totalItemsSold properties. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property.
//
// //         EXAMPLE...
// // //
// const salesData = [
//     { // index 0
//         month: 'January',
//         totalItemsSold: 0
//     },
//     { // index 1
//         month: 'February',
//         totalItemsSold: 5
//     },
//     { // index 2
//         month: 'March',
//         totalItemsSold: 2
//     },
//     { // index 3
//         month: 'April',
//         totalItemsSold: 10
//     },
//     { // index 4
//         month: 'May',
//         totalItemsSold: 30
//     }
// ];
//
// function returnTotalSales(salesData) {
//
//     let sum = 0;
//
//     // for
//
//     // for (let i = 0; i < salesData.length; i += 1) {
//     //   sum += salesData[i].totalItemsSold;
//     // }
//     // forEach
//     salesData.forEach(element => {
//         sum += element.totalItemsSold;
//     });
//
//     return sum;
//
//     // const total = salesData[0].totalItemsSold +
//     //         salesData[1].totalItemsSold +
//     //         salesData[2].totalItemsSold +
//     //         salesData[3].totalItemsSold +
//     //         salesData[4].totalItemsSold;
//     // return total;
// }
// //
// console.log(returnTotalSales(salesData)); // returns 47
//
// const total = salesData[0].totalItemsSold +
//       salesData[1].totalItemsSold +
//       salesData[2].totalItemsSold +
//       salesData[3].totalItemsSold +
//       salesData[4].totalItemsSold;
//
// console.log(total);
//
// const avg = total/ salesData.length
//
// console.log(avg);
//
// ================================= WARM UP
//
// Create a function, returnAdmins, that takes in an array of user objects
// and returns an array of only the admin user objects. Assume the array
// has at least one user object and all elements have an isAdmin property.
//
//     Example:

//
// const users = [
//
//     {
//         username: 'fred123',
//         password: 'letmein',
//         email: 'fred123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'cindy123',
//         password: 'hello123',
//         email: 'cindy123@email.com',
//         isAdmin: false
//     },
//     {
//         username: 'kathy123',
//         password: 'letmein',
//         email: 'kathy123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'kyle123',
//         password: 'letmein',
//         email: 'kyle123@email.com',
//         isAdmin: false
//     }
// ]
//
// function returnAdmins(users) {
//     const admins = [];
//     for (let i = 0; i < users.length; i += 1) {
//         if (users[i].isAdmin) {
//             admins.push(users[i]);
//         }
//     }
//     return admins;
// }
//
// console.log(returnAdmins(users));
//
// /*

// returnAdmins(users) returns...
//
// [
//
//     {
//         username: 'fred123',
//         password: 'letmein',
//         email: 'fred123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'kathy123',
//         password: 'letmein',
//         email: 'kathy123@email.com',
//         isAdmin: true
//     }
// ]
//
// */
//
// ================================= WARM UP

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable.
//     If the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
// The function should return true if the neighborhood object is desireable and false otherwise.

// example data...

    const neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: 22
};

const neighborhood2 = {
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "high",
    schools: 24
}

const neighborhood3 = {
    neighborhood: "Oak Mountain",
    medianHomePrice: 290000,
    pool: false,
    tennis: false,
    crimeRate: "low",
    schools: 24
}

const neighborhood4 = {
    neighborhood: "Ginormous Acres",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: 27
}

function goodNeighborhoods (neighborhood) {
    // console.log(neighborhood.medianHomePrice);
    // console.log(neighborhood.crimeRate);
    // console.log(neighborhood.schools);

    const isRightPrice= neighborhood.medianHomePrice < 300000;
    const isRightCrimeRate = neighborhood.crimeRate === 'low';
    const isRightSchool= neighborhood.schools >= 24;

    const isDesireable = isRightCrimeRate && isRightSchool && isRightPrice;

    return isDesireable;
}

// OR

// function goodNeighborhoods (neighborhood) {
//   return neighborhood.medianHomePrice < 300000 &&
//          neighborhood.crimeRate === 'low' &&
//          neighborhood.schools >= 24;
//      }

console.log(goodNeighborhoods(neighborhood1));
console.log(goodNeighborhoods(neighborhood2));
console.log(goodNeighborhoods(neighborhood3));
console.log(goodNeighborhoods(neighborhood4));