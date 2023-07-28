// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.

const isNegative = (number) => {
    return number < 0;
}
isNegative();

// Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.

const isTen = (number) => {
    return number === 10;
}
isTen();

// Write a function named double that accepts a number and returns the number doubled.
const double = (number) => {
    return number * 2;
}
double();

// Write a function named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.
const remove9s = (arr) => {
    let output = []
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] != 9) {
            output.push(arr[i]);
        }
    }
    return output;
};
remove9s();
// Write a function named average that accepts an array of numbers and returns the average of those numbers.

const average = (arr) => {
    let output = 0;
    for(let i = 0; i < arr.length; i++){
        output += arr[i];
    }

    const avg = output/ arr.length

    return avg;
}
average();
// Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
const countOdds = (arr) => {
    let output = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1){
            output++
        }
    }
    return output;
}
countOdds();

// Write a function named averageSales that accepts an array of objects where each object represents a person, and has a sales property. The function should return the average of every object's sales property.
const averageSales = (arr) => {
    let output = 0

    for(let i = 0; i < arr.length; i++) {
        output += arr[i].sales;
    }
    const avg = output/ arr.length
    return avg;
}
averageSales();

// Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character, and returns an object with properties firstName and lastName.
const convertNameToObject = (string) => {
    const splitName= string.split('');
    const firstName = splitName[0];
    const lastName = splitName[1];

    const nameObject = {
        firstName,
        lastName
    }
    return nameObject;
}

convertNameToObject();

// Write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)
const countVowels = (string) => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'e', 'o', 'u']

    for(let i = 0; i < string.length; i++) {
        if(vowels.includes(string[i])) {
            count++
        }
    }
    return count;
}
countVowels();
// Write a function named analyzeWord. It should take in a string and return an object with information about the input word. The object returned should have the following properties:
//
//     word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word
const analyzeWord = (string) => {
    const output = {
        word: string,
        numberOfLetters: string.length,
        numberOfVowels: countVowels(string),
    }
    return output;
}
analyzeWord();
// Write a function named capitalizeName that accepts a string that is a first and last name separated by a space, and returns a string that that has the first and last names capitalized.
//
//     For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.
const capitalizeName = (string) => {
    const splitName= string.split('');
    const firstName = splitName[0];
    const lastName = splitName[1];

    const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)

    const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)

    return capitalizedFirstName + capitalizedLastName;
}
capitalizeName();

