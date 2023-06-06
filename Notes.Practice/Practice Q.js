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

