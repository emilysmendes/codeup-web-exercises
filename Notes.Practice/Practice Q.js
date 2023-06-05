// // Question 3
// //Student enrollment exercise
// let fullClass = false;
// let dateConflict = false;
// let canEnroll = fullClass === false && dateConflict === false;
// OR
// let canEnroll = !fullClass && !dateConflict;
//
// console.log(canEnroll);
//
// // Question 2
// // hourly rate from each company
// let google = 400 ;
// let amazon = 380 ;
// let facebook = 350 ;
// // hours from each company
// let hoursForGoogle = 6 ;
// let hoursForAmazon = 4 ;
// let hoursForFacebook = 10 ;
// // payment from each company
// let googlePayment = google * hoursForGoogle ;
// let amazonPayment = amazon * hoursForAmazon ;
// let facebookPayment = facebook * hoursForFacebook ;
// // total weekly payment
// let totalPayment = googlePayment + amazonPayment + facebookPayment;
// // print result
// console.log("Total payment for the week : $" + totalPayment);
//
// // Question 4
// //
// let atLeastTwo = true;
// let offerNotExpired = true;
// let premMem = true
// let prodOff = (atLeastTwo && offerNotExpired) || premMem;
//
// let prodOff = offerNotExpired && (atLeastTwo || premMem) ;
//
// true || true === true

// function identity(input) {
//     return input
// }
// identity();

var random = Math.floor((Math.random() * 3) + 1);

function getRandomNumber(min, max) {
    return  random, random
}
 getRandomNumber();

================================= CONDITIONALS BONUSES

// Bonus 1
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// - Catch any invalid inputs.
// - Write the logic using if/else ifs and then refactor using a switch case
//

let favoriteDay = prompt("What is your favorite day of the week?")
function favoriteDay (week) {
    if ("monday") {
    alert (favoriteDay + " is a long day};
} else if ("tuesday") {
        alert (favoriteDay + " is a cool day};
    } else if ("wednesday") {
        alert (favoriteDay + " is a middle day};
    } else if ("thursday") {
        alert (favoriteDay + " is a decent day};
    } else if ("friday") {
        alert (favoriteDay + " is a fun day};
    } else if ("saturday") {
        alert (favoriteDay + " is a better day};
    } else if ("sunday") {
        alert (favoriteDay + " is a calm day};
    } else {
    alert ("invalid input")}
}

console.log(favoriteDay(week));


//     Bonus 2
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator
//
// Bonus 3
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
//
//
// GOLD STAR BONUS
//
// Create a distance unit conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//
//     Prompt the user for a second unit of measurement to convert to.
//
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//
// Use these conversion functions to make the correct unit conversion
//
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//
//     DOUBLE GOLD STAR BONUS
//
//     Allow unit conversion to metric system units